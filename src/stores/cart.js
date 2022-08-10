import { writable } from "svelte/store";

export const cartList = writable([
    {
        id: 1,
        title: "Razor blade",
        price: 1.99,
        image: "/product-1.png",
        amount: 1
    },
    {
        id: 2,
        title: "Gillette Razor",
        price: 9.99,
        image: "/product-2.png",
        amount: 1
    },
    {
        id: 3,
        title: "Barber Razor",
        price: 7.99,
        image: "/product-3.png",
        amount: 1
    },

])