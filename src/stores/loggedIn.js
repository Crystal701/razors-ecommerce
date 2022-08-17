import { writable } from "svelte/store";
import { browser } from "$app/env";

export const loggedinUser = writable(getStorageUser() || []);

function getStorageUser() {
    if (browser) {
        return localStorage.getItem("loggedinUser") ? JSON.parse(localStorage.getItem("loggedinUser")) : [];
    }
}

export function setStorageUser(loggedUser) {
    localStorage.setItem("loggedinUser", JSON.stringify(loggedUser));
}