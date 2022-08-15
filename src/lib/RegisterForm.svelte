<script>
    import SubmissionCard from "./SubmissionCard.svelte";
    import { users } from "../stores/users.js";

    let email = "";
    let password = "";
    let username = "";
    let isRegistered = false;

    const handleSubmit = () => {
        for (let user of $users) {
            if (email === user.email) {
                isRegistered = true;
            }
        }

        if (!isRegistered) {
            const id = `${new Date()} ${Math.random()}`;
            const isLogin = false;
            const newUser = { id, email, password, username, isLogin };

            users.update((currentUsers) => [...currentUsers, newUser]);
            isRegistered = true;
        }
    };
</script>

{#if !isRegistered}
    <SubmissionCard title={"Register"}>
        <form
            on:submit|preventDefault={handleSubmit}
            class="flex flex-col gap-3"
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
                minlength="8"
                required
            />

            <label for="username" class="font-extralight">Username</label>
            <input
                type="text"
                id="username"
                class="border-b-2 p-1 focus:outline-none focus:border-[#ba9761]"
                bind:value={username}
                required
            />

            <button class="button hover:bg-[#ba9761] hover:text-white"
                >submit</button
            >
            <p class="font-light text-sm text-center">
                Already have an account? <span
                    class="text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
                    on:click>Log in here</span
                >
            </p>
        </form>
    </SubmissionCard>
{:else if isRegistered}
    <SubmissionCard>
        <div class="flex flex-col items-center gap-8">
            <p class="text-[#ba9761] text-2xl">You're registered.</p>

            <p class="font-extralight">
                Click here to <span
                    on:click
                    class="uppercase text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
                    >login</span
                >
            </p>
        </div>
    </SubmissionCard>
{/if}
