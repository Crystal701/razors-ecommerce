<script>
    import SubmissionCard from "./SubmissionCard.svelte";
    import { userStore, setStorageUser, logout } from "../strapi/user";
    import { afterUpdate } from "svelte";
    import loginUser from "../strapi/loginUser.js";

    afterUpdate(() => setStorageUser($userStore));

    $: user = $userStore.jwt;

    let email = "";
    let password = "";

    const handleSubmit = async () => {
        await loginUser(email, password);
    };

    const handleLogout = () => {
        logout();
    };
</script>

{#if !user}
    <SubmissionCard title={"Sign In"}>
        <form
            on:submit|preventDefault={handleSubmit}
            class="flex flex-col gap-3"
            id="login-form"
        >
            <label for="email" class="font-extralight">Email</label>
            <input
                type="email"
                id="email"
                class="border-b-2 p-1 focus:outline-none focus:border-[#ba9761]"
                bind:value={email}
                required
            />

            <label for="password" class="font-extralight">Password</label>
            <input
                type="password"
                id="password"
                class="border-b-2 p-1 focus:outline-none focus:border-[#ba9761]"
                bind:value={password}
                required
            />

            <button
                class="button hover:bg-[#ba9761] hover:text-white"
                id="form-button">submit</button
            >

            <p class="font-light text-sm text-center">
                Don't have an account? <span
                    class="text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
                    on:click>Register here</span
                >
            </p>
        </form>
    </SubmissionCard>
{:else}
    <SubmissionCard>
        <p class="text-[#ba9761] text-2xl text-center">You're logged in.</p>

        <div class="flex flex-col items-center gap-2">
            <a
                href="/checkout"
                class="button hover:bg-[#ba9761] hover:text-white">Checkout</a
            >
            <span
                class="text-sm font-extralight hover:underline hover:cursor-pointer"
                on:click={handleLogout}>Log out</span
            >
        </div>
    </SubmissionCard>
{/if}
