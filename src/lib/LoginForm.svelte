<script>
    import SubmissionCard from "./SubmissionCard.svelte";
    import { users } from "../stores/users.js";
    import { loggedinUser, setStorageUser } from "../stores/loggedIn.js";
    import { afterUpdate } from "svelte";

    afterUpdate(() => setStorageUser($loggedinUser));

    let email = "";
    let password = "";
    let errorMsg = "";
    let isLogin = false;

    for (let client of $loggedinUser) {
        isLogin = client.isLogin;
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

{#if !isLogin}
    <SubmissionCard title={"Sign In"}>
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
                required
            />
            <p class="text-red-500">{errorMsg}</p>

            <button class="button hover:bg-[#ba9761] hover:text-white"
                >submit</button
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
