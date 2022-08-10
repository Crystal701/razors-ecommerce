<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import CartList from "$lib/CartList.svelte";

    let menuOpen = false;
    let scrolling = false;
    let isCart = false;

    const toggleMenu = () => {
        menuOpen = !menuOpen;
    };

    onMount(() => {
        window.addEventListener("resize", () => {
            menuOpen = false;
        });

        window.addEventListener("scroll", () => {
            menuOpen = false;

            if (window.scrollY > 10) {
                scrolling = true;
            } else {
                scrolling = false;
            }
        });
    });
</script>

<header
    class="sticky top-0 py-4 px-4 sm:px-6 md:px-12 flex justify-center z-50 w-full transition duration-500 bg-white"
    class:shadow-md={scrolling}
>
    <nav class="grid grid-cols-3 items-start w-full max-w-[1200px]">
        <div class="pt-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 md:hidden hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                on:click={toggleMenu}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                />
            </svg>

            {#key menuOpen}
                <div
                    class="bg-white absolute md:bg-transparent md:relative w-full left-0 flex flex-col gap-6 mt-4 p-6 md:mt-0 md:p-0 md:flex md:flex-row"
                    class:hidden={!menuOpen}
                    transition:slide|local
                >
                    <a
                        sveltekit:prefetch
                        href="/"
                        class="navlink hover:cursor-pointer hover:border-black w-fit"
                        on:click={() => (menuOpen = false)}>Home</a
                    >
                    <a
                        sveltekit:prefetch
                        href="/products"
                        class="navlink hover:cursor-pointer hover:border-black w-fit"
                        on:click={() => (menuOpen = false)}>Products</a
                    >
                    <a
                        sveltekit:prefetch
                        href="/about"
                        class="navlink hover:cursor-pointer hover:border-black w-fit"
                        on:click={() => (menuOpen = false)}>About</a
                    >
                </div>
            {/key}
        </div>

        <h1 class="font-secondary text-3xl text-center">Razors</h1>

        <div class="flex items-center gap-5 justify-self-end pt-2">
            <a
                sveltekit:prefetch
                href="/login"
                class="navlink hover:cursor-pointer hover:border-black">Login</a
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 hover:cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                on:click={() => (isCart = true)}
            >
                <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
            </svg>
        </div>
    </nav>
</header>

{#if isCart}
    <CartList on:click={() => (isCart = false)} />
{/if}
