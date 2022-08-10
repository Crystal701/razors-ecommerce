<script>
    import Card from "$lib/Card.svelte";
    import { products } from "../../stores/products";

    let title = "Our Products";
    let productCategory = $products;
</script>

<Card {title} {productCategory} />
