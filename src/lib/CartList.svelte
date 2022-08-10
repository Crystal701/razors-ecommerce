<script>
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";
    import { cartList } from "../stores/cart.js";

    $: totalPrice = $cartList.reduce(
        (acc, cur) => acc + cur.price * cur.amount,
        0
    );

    const deleteItem = (id) => {
        cartList.update((items) => {
            return items.filter((item) => item.id !== id);
        });
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

        cartList.update(() => {
            return updatedData;
        });
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

        cartList.update(() => {
            return updatedData;
        });
    };
</script>

<div
    class="fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex z-50"
    on:click|self
    transition:fade={{ duration: 300 }}
>
    <div
        class="fixed top-0 right-0 bg-white w-[350px] sm:w-[450px] h-full flex flex-col p-6 gap-6"
        transition:fly={{ x: 100, duration: 500 }}
    >
        <div class="relative">
            <button class="absolute" on:click>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

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
                        <img src={image} alt={title} class="w-16 h-fit" />
                        <div>
                            <h5 class="font-secondary">{title}</h5>
                            <p>${price * amount}</p>
                            <button
                                class="text-sm text-red-500"
                                on:click={() => deleteItem(id)}>remove</button
                            >
                        </div>
                    </div>

                    <div class="flex flex-col items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 hover:cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            on:click={() => addAmount(id)}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 15l7-7 7 7"
                            />
                        </svg>

                        <span>{amount}</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 hover:cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            on:click={() => reduceAmount(id, amount)}
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>
            {:else}
                <p class="text-center italic font-light">
                    Your bag is currently empty...
                </p>
            {/each}
        </div>

        <div class="text-center mt-6 bottom-0">
            <p class="text-xl mb-4">Total: ${totalPrice.toFixed(2)}</p>
            <p class="font-light">
                Please <a
                    href="/login"
                    class="uppercase text-[#ba9761] hover:underline">login</a
                >
                to checkout
            </p>
        </div>
    </div>
</div>
