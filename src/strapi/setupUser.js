import { setStorageUser, userStore } from "../strapi/user.js";

export function setupUser(response) {
    const jwt = response.data.jwt;
    const username = response.data.user.username;
    const user = { jwt, username };
    setStorageUser(user);
    userStore.set(user)
}