import { writable } from "svelte/store";

export const users = writable([
    {
        id: `${new Date()} ${Math.random()}`,
        email: "abc@gmail.com",
        password: "12345678",
        username: "ABC",
        isLogin: false
    },
    {
        id: `${new Date()} ${Math.random()}`,
        email: "def@gmail.com",
        password: "87654321",
        username: "DEF",
        isLogin: false
    }
])