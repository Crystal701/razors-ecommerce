<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { cartList } from "../stores/cart.js";
    import { loggedinUser } from "../stores/loggedIn.js";
    import SubmissionCard from "$lib/SubmissionCard.svelte";

    $: totalPrice = $cartList
        .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
        .toFixed(2);

    let fullname = "";
    let nameErr = "";
    let cardElement;
    let cardErrors;
    let card;
    let stripe;
    let elements;

    onMount(() => {
        let isLogin = false;

        for (let client of $loggedinUser) {
            isLogin = client.isLogin;
        }

        if (!isLogin) {
            goto("/");
        }

        if (totalPrice > 0) {
            stripe = Stripe(
                "pk_test_51LWzxIHGLe7kwXsFVzTmnbvHelu3uLmM8TwhPBL0z2DcMyPhhr3KLbkTidZufxPnQLlnR8CMdZah1k5e5iFWF6he005owzOl2O"
            );

            elements = stripe.elements();
            card = elements.create("card");
            card.mount(cardElement);

            card.addEventListener("change", (e) => {
                if (e.error) {
                    cardErrors.textContent = e.error.message;
                } else {
                    cardErrors.textContent = "";
                }
            });
        }
    });

    async function handleSubmit() {
        try {
            let response = await stripe.createToken(card);
            const { token } = response;

            if (token) {
                if (fullname !== "") {
                    console.log(response);
                    nameErr = "";

                    cartList.update(() => []);
                    goto("/");
                    alert("Payment is successful!");
                } else {
                    nameErr = "Please fill in your name";
                }
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }
</script>

{#if totalPrice > 0}
    <SubmissionCard title={"Checkout"}>
        <form
            class="flex flex-col gap-5"
            on:submit|preventDefault={handleSubmit}
        >
            <h4 class="text-[#ba9761] font-secondary text-lg font-semibold">
                Order Total: ${totalPrice}
            </h4>

            <div class="flex flex-col gap-3">
                <label for="fullname" class="font-extralight">Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    class="border-b-2 p-1 focus:outline-none focus:border-[#ba9761]"
                    bind:value={fullname}
                    required
                />
                <p class="text-red-500">{nameErr}</p>
            </div>

            <div class="stripe-input">
                <h5>Credit or Debit Card</h5>
                <div class="text-gray-400 text-sm">
                    <p>Use this card number: 4242 4242 4242 4242</p>
                    <p>Enter Any 5 digits for ZIP Code</p>
                    <p>Enter Any 3 digits for CVC</p>
                </div>

                <div
                    class="border p-3 mt-5"
                    id="card-element"
                    bind:this={cardElement}
                >
                    <!--Stripe.js injects the Payment Element-->
                </div>
                <div id="card-errors" bind:this={cardErrors} role="alert">
                    <!--Stripe.js injects the Error-->
                </div>
            </div>

            <button class="button hover:bg-[#ba9761] hover:text-white"
                >pay now</button
            >
        </form>
    </SubmissionCard>
{:else if totalPrice < 1}
    <SubmissionCard>
        <div class="flex flex-col gap-8 items-center">
            <h3>Your Cart is Empty.</h3>
            <a
                href="/products"
                class="button w-fit hover:bg-[#ba9761] hover:text-white"
                >keep shopping</a
            >
        </div>
    </SubmissionCard>
{/if}
