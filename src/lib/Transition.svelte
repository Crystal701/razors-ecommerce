<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    export let url: URL;
</script>

{#key url}
    <div in:fly={{ y: 50, duration: 450, easing: cubicOut }}>
        <slot />
    </div>
{/key}
