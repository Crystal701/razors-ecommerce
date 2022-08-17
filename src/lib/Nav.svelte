<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import MenuIcon from "../icons/menu-icon.svelte";
    import CartIcon from "../icons/cart-icon.svelte";
    import CartList from "$lib/CartList.svelte";
    import { cartList } from "../stores/cart.js";
    import { loggedinUser } from "../stores/loggedIn.js";

    let menuOpen = false;
    let scrolling = false;
    let isCart = false;
    $: productNum = $cartList.length;
    $: user = $loggedinUser.length;

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
            <MenuIcon on:click={toggleMenu} />

            {#key menuOpen}
                <div
                    class="bg-white absolute shadow-md md:bg-transparent md:relative md:shadow-none w-full left-0 flex flex-col gap-6 mt-4 p-6 md:mt-0 md:p-0 md:flex md:flex-row"
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
                    <hr class="sm:hidden" />
                    <a
                        sveltekit:prefetch
                        href="/login"
                        class="navlink hover:cursor-pointer hover:border-black w-fit sm:hidden"
                        on:click={() => (menuOpen = false)}
                    >
                        {#if user === 0}
                            Login
                        {:else}
                            Logout
                        {/if}
                    </a>
                </div>
            {/key}
        </div>

        <h1 class="font-secondary text-3xl text-center">Razors</h1>

        <div class="flex items-center gap-5 justify-self-end pt-2">
            <a
                sveltekit:prefetch
                href="/login"
                class="hidden sm:inline-block navlink hover:cursor-pointer hover:border-black"
            >
                {#if user === 0}
                    Login
                {:else}
                    Logout
                {/if}
            </a>
            <div class="relative flex items-center">
                <CartIcon on:click={() => (isCart = true)} />

                {#if productNum > 0}
                    <div
                        class="text-xs absolute top-[-8px] right-[-8px] bg-[#ba9761] border-0 rounded-full h-4 w-4 text-center text-white p-[1px]"
                    >
                        {productNum}
                    </div>
                {/if}
            </div>
        </div>
    </nav>
</header>

{#if isCart}
    <CartList on:click={() => (isCart = false)} />
{/if}
