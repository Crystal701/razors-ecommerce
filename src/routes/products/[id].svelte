<script context="module">
    export async function load({ fetch, params }) {
        const id = params.id;
        const req = await fetch(
            `https://razor-ecommerce-server.herokuapp.com/api/products/${id}?populate=*`
        );
        const product = await req.json();

        if (req.ok) {
            return {
                props: {
                    product,
                },
            };
        }
        return {
            status: 301,
            redirect: "/",
        };
    }
</script>

<script>
    import { cartList } from "../../stores/cart.js";
    import CartList from "$lib/CartList.svelte";

    export let product;
    let isCart = false;

    const { id, attributes } = product.data;
    const { title, description, price, image } = attributes;

    const addToCart = (id, title, price, image) => {
        let isExist = false;
        let updatedData;

        for (let item of $cartList) {
            if (item.id === id) {
                isExist = true;
            }
        }

        if (isExist) {
            updatedData = $cartList.map((item) => {
                if (item.id === id) {
                    const amount = item.amount + 1;
                    return { ...item, amount };
                } else {
                    return { ...item };
                }
            });

            cartList.update(() => updatedData);
        } else {
            const amount = 1;
            updatedData = { id, title, price, image, amount };

            cartList.update((currentData) => [...currentData, updatedData]);
        }

        isCart = true;
    };
</script>

<div
    class="flex flex-col justify-center w-full max-w-[1300px] px-4 sm:px-6 md:px-12 m-auto my-10 gap-3 lg:gap-10"
>
    <a href="/products" class="button w-fit hover:bg-[#ba9761] hover:text-white"
        >back to products</a
    >

    <div
        class="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-20"
    >
        <img src={image.data.attributes.url} alt={title} class="w-1/2" />

        <div class="flex flex-col gap-4 min-w-[300px]">
            <h3 class="font-secondary text-2xl">{title}</h3>
            <p class="font-semibold text-[#ba9761] text-xl">${price}</p>
            <p class="text-justify font-extralight">{description}</p>
            <button
                class="button hover:bg-[#ba9761] hover:text-white"
                on:click={() =>
                    addToCart(id, title, price, image.data.attributes.url)}
                >add to cart</button
            >
        </div>
    </div>
</div>

{#if isCart}
    <CartList on:click={() => (isCart = false)} />
{/if}
