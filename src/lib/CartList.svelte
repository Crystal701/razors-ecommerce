<script>
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";
    import { cartList, setStorageCart } from "../stores/cart.js";
    import { userStore } from "../strapi/user.js";
    import CloseIcon from "../icons/close-icon.svelte";
    import ChevronUp from "../icons/chevron-up.svelte";
    import ChevronDown from "../icons/chevron-down.svelte";
    import { afterUpdate } from "svelte";

    afterUpdate(() => setStorageCart($cartList));

    $: user = $userStore.jwt;

    $: totalPrice = $cartList
        .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
        .toFixed(2);

    const deleteItem = (id) => {
        cartList.update((items) => items.filter((item) => item.id !== id));
    };

    const addAmount = (id) => {
        const updatedData = $cartList.map((item) => {
            if (item.id === id) {
                const amount = item.amount + 1;
                return { ...item, amount };
            } else {
                return { ...item };
            }
        });

        cartList.update(() => updatedData);
    };

    const reduceAmount = (id, amount) => {
        if (amount <= 1) {
            deleteItem(id);
        }

        const updatedData = $cartList.map((item) => {
            if (item.id === id) {
                const amount = item.amount - 1;
                return { ...item, amount };
            } else {
                return { ...item };
            }
        });

        cartList.update(() => updatedData);
    };
</script>

<div
    class="fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex z-50"
    on:click|self
    transition:fade={{ duration: 300 }}
>
    <div
        class="fixed top-0 right-0 bg-white w-[300px] xs:w-[400px] h-full flex flex-col p-6 gap-6"
        transition:fly={{ x: 100, duration: 500 }}
    >
        <div class="relative">
            <CloseIcon on:click />

            <h3 class="text-center">Your Bag</h3>
        </div>

        <div class=" flex flex-col w-full h-full gap-4 overflow-scroll">
            {#each $cartList as { id, title, price, image, amount } (id)}
                <div
                    class="flex justify-between"
                    transition:fly|local={{ x: 50, duration: 200 }}
                    animate:flip
                >
                    <div class="flex gap-4">
                        <img src={image} alt={title} class="w-16 h-16" />
                        <div>
                            <h5 class="font-secondary">{title}</h5>
                            <p>${(price * amount).toFixed(2)}</p>
                            <button
                                class="text-sm text-red-500"
                                on:click={() => deleteItem(id)}>remove</button
                            >
                        </div>
                    </div>

                    <div class="flex flex-col items-center">
                        <ChevronUp on:click={() => addAmount(id)} />

                        <span>{amount}</span>

                        <ChevronDown
                            on:click={() => reduceAmount(id, amount)}
                        />
                    </div>
                </div>
            {:else}
                <p class="text-center italic font-light">
                    Your bag is currently empty...
                </p>
            {/each}
        </div>

        <div class="flex flex-col text-center my-6 bottom-0">
            <p class="text-xl mb-4">Total: ${totalPrice}</p>

            {#if !user}
                <p class="font-light">
                    Please <a
                        href="/login"
                        class="uppercase text-[#ba9761] hover:underline"
                        on:click>login</a
                    >
                    to checkout
                </p>
            {:else}
                <a
                    href="/checkout"
                    class="button hover:bg-[#ba9761] hover:text-white"
                    on:click>Checkout</a
                >
            {/if}
        </div>
    </div>
</div>
