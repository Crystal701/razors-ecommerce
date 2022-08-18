import { writable } from "svelte/store";
import fetchProducts from "./fetchProducts";

let res = await fetchProducts();
const resItems = res.strapiProducts;

export const products = writable(resItems);

