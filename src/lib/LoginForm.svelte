<script>
    import { fade } from "svelte/transition";
    import { users } from "../stores/users.js";
    import { loggedinUser } from "../stores/loggedIn.js";

    let email = "";
    let password = "";
    let errorMsg = "";
    let isLogin = false;

    for (let client of $loggedinUser) {
        isLogin = client.isLogin || false;
    }

    const handleSubmit = () => {
        let isRegistered = false;
        let registeredPwd = "";

        for (let client of $users) {
            if (email === client.email) {
                isRegistered = true;
                registeredPwd = client.password;
            }
        }

        if (isRegistered) {
            if (password === registeredPwd) {
                errorMsg = "";
                isLogin = true;

                const newStatus = $users.map((user) => {
                    if (email === user.email) {
                        return { ...user, isLogin };
                    } else {
                        return { ...user };
                    }
                });

                const loggedUser = newStatus.filter(
                    (user) => user.email === email
                );

                users.update(() => newStatus);

                loggedinUser.update(() => loggedUser);
            } else {
                errorMsg = "Wrong password";
            }
        } else {
            errorMsg = "You're not registered. Please register to login.";
        }
    };

    const handleLogout = () => {
        isLogin = false;

        for (let client of $loggedinUser) {
            email = client.email;
        }

        const newStatus = $users.map((user) => {
            if (email === user.email) {
                return { ...user, isLogin };
            } else {
                return { ...user };
            }
        });

        users.update(() => newStatus);

        loggedinUser.update(() => []);
    };
</script>

<div
    class="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 py-10 my-10"
    in:fade|local
>
    {#if !isLogin}
        <h3 class="font-secondary text-2xl text-center">Sign In</h3>

        <form
            on:submit|preventDefault={handleSubmit}
            class="w-full max-w-[700px] flex flex-col shadow-md p-10 m-5 border-t-4 border-[#ba9761] gap-3"
        >
            <label for="email" class="font-extralight">Email</label>
            <input
                type="email"
                id="email"
                class="border-b-2 p-2 focus:outline-none focus:border-[#ba9761]"
                bind:value={email}
                required
            />

            <label for="password" class="font-extralight">Password</label>
            <input
                type="password"
                id="password"
                class="border-b-2 p-2 focus:outline-none focus:border-[#ba9761]"
                bind:value={password}
                required
            />
            <p class="text-red-500">{errorMsg}</p>

            <button
                class="button sm:text-sm hover:bg-[#ba9761] hover:text-white"
                >submit</button
            >
            <p class="font-extralight text-sm text-center">
                Don't have an account? <span
                    class="text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
                    on:click>Register here</span
                >
            </p>
        </form>
    {:else}
        <div
            class="w-full max-w-[700px] flex flex-col shadow-md p-10 m-5 border-t-4 border-[#ba9761] gap-8 text-center"
            in:fade|local
        >
            <p class="text-[#ba9761] text-2xl">You're logged in.</p>

            <div class="flex flex-col items-center gap-2">
                <a
                    href="/checkout"
                    class="button sm:text-sm hover:bg-[#ba9761] hover:text-white"
                    >Checkout</a
                >
                <span
                    class="text-sm font-extralight hover:underline hover:cursor-pointer"
                    on:click={handleLogout}>Log out</span
                >
            </div>
        </div>
    {/if}
</div>
