<script>
    import { fade } from "svelte/transition";
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

<div
    class="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 py-10 my-10"
    in:fade|local
>
    {#if !isRegistered}
        <h3 class="font-secondary text-2xl text-center">Register</h3>

        <form
            on:submit|preventDefault={handleSubmit}
            class="w-full max-w-[700px] flex flex-col shadow-md p-10 m-5 border-t-4 border-[#ba9761] gap-3"
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
    {:else if isRegistered}
        <div
            class="w-full max-w-[700px] flex flex-col shadow-md p-10 m-5 border-t-4 border-[#ba9761] gap-8 text-center"
            in:fade|local
        >
            <p class="text-[#ba9761] text-2xl">You're registered.</p>

            <p class="font-extralight">
                Click here to <span
                    on:click
                    class="uppercase text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
                    >login</span
                >
            </p>
        </div>
    {/if}
</div>
