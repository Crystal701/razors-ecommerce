<script>
    import { products } from "../strapi/products";
    import Loading from "./Loading.svelte";

    export let title = "Featured Products";

    const featuredProducts = $products.filter(
        (item) => item.attributes.featured === true
    );
    export let productCategory = featuredProducts;
</script>

<div
    class="flex flex-col justify-center items-center w-full max-w-[1300px] m-auto mt-20 mb-10 px-4 sm:px-6 md:px-12 text-center"
>
    <h3 class="font-secondary text-2xl">{title}</h3>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 my-10 h-full">
        {#await productCategory}
            <Loading />
        {:then productCategory}
            {#each productCategory as { id, attributes } (id)}
                <a
                    sveltekit:prefetch
                    href="/products/{id}"
                    class="flex flex-col shadow-md bg-[rgba(255,255,255,0.1)] p-6 h-stretch border-t-4 border-[#ba9761] hover:border-black hover:shadow-xl transition duration-300"
                >
                    <img
                        src="http://localhost:1337{attributes.image.data
                            .attributes.url}"
                        alt={attributes.title}
                        class="my-4"
                    />

                    <div class="flex flex-col justify-between h-full">
                        <h4>{attributes.title}</h4>
                        <p class="font-semibold">${attributes.price}</p>
                    </div>
                </a>
            {/each}
        {/await}
    </div>
</div>
