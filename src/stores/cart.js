import { writable } from "svelte/store";
import { browser } from "$app/env";

export const cartList = writable(getStorageCart() || []);

function getStorageCart() {
    if (browser) {
        return localStorage.getItem("cartList") ? JSON.parse(localStorage.getItem("cartList")) : [];
    }
}

export function setStorageCart(cartValues) {
    localStorage.setItem("cartList", JSON.stringify(cartValues));
}

export function clearCart() {
    cartList.set([]);
    localStorage.removeItem("cartList");
}

