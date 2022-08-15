<script>
    import { fade } from "svelte/transition";

    export let title = "";
</script>

<h3 class="font-secondary text-2xl text-center mt-20">{title}</h3>

<div class="flex flex-col items-center w-full px-4 sm:px-6 md:px-12" in:fade>
    <div
        class="w-full max-w-[700px] flex flex-col shadow-md p-10 m-5 border-t-4 border-[#ba9761] gap-8"
    >
        <slot />
    </div>
</div>
