import { writable } from "svelte/store";
import { browser } from "$app/env";

export const userStore = writable(getStorageUser() || { username: null, jwt: null });

function getStorageUser() {
    if (browser) {
        return localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : { username: null, jwt: null };
    }

}

export function setStorageUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function logout() {
    userStore.set({ user: null, jwt: null });
    localStorage.clear();
}