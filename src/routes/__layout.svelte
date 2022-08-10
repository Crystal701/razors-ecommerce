<script>
    import { page } from "$app/stores";
    import Nav from "$lib/Nav.svelte";
    import "../app.css";
    import Transition from "$lib/Transition.svelte";
</script>

<Nav />

<main>
    <Transition url={$page.url}>
        <slot />
    </Transition>
</main>
