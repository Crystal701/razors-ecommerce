import axios from "axios";
import { clearCart } from "../stores/cart.js";
import { goto } from "$app/navigation";

async function submitOrder(name, cartTotal, items, stripeTokenId, userToken) {
    await axios
        .post("http://localhost:1337/api/orders", {
            data: {
                name,
                cartTotal,
                items,
                stripeTokenId
            }
        },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })

        .then(response => {
            clearCart();
            goto("/");
            alert("Payment is successful!");

            return response;
        })

        .catch(error => {
            console.log(error);
            alert("Payment failed. Please try again.");
        })

}

export default submitOrder;