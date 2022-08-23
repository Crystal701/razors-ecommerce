<script>
    import SubmissionCard from "./SubmissionCard.svelte";
    import registerUser from "../strapi/registerUser";

    let email = "";
    let password = "";
    let username = "";

    const handleSubmit = async () => {
        await registerUser(email, password, username);
    };
</script>

<SubmissionCard title={"Register"}>
    <form
        on:submit|preventDefault={handleSubmit}
        class="flex flex-col gap-3"
        id="register-form"
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

        <button
            class="button hover:bg-[#ba9761] hover:text-white mt-3"
            id="form-button">submit</button
        >
    </form>

    <p class="font-light text-sm text-center">
        Already have an account? <span
            class="text-[#ba9761] font-normal hover:underline hover:cursor-pointer"
            on:click>Log in here</span
        >
    </p>
</SubmissionCard>
