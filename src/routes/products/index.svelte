<script>
    import Card from "$lib/Card.svelte";
    import { products } from "../../stores/products";

    let title = "Our Products";
    let productCategory = $products;
</script>

<svelte:head>
    <title>Razors Products</title>
</svelte:head>

<Card {title} {productCategory} />
