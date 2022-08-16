<script>
    import LoginForm from "$lib/LoginForm.svelte";
    import RegisterForm from "$lib/RegisterForm.svelte";

    let activePage = "Log in";
</script>

<svelte:head>
    <title>Login to Razors</title>
</svelte:head>

{#if activePage === "Log in"}
    <LoginForm on:click={() => (activePage = "Registration")} />
{:else if activePage === "Registration"}
    <RegisterForm on:click={() => (activePage = "Log in")} />
{/if}
