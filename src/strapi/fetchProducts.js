export default async function () {
    const req = await fetch("http://localhost:1337/api/products?populate=*");
    const fetchProducts = await req.json();
    const strapiProducts = fetchProducts.data;

    if (req.ok) {
        return {
            strapiProducts
        };
    }

    return {
        status: req.status,
    };
}
