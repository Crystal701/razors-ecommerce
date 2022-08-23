import axios from "axios";
import { setupUser } from "../strapi/setupUser.js"


async function registerUser(email, password, username) {
    const error = document.querySelector(".errorMsg");
    error?.remove();

    await axios
        .post("http://localhost:1337/api/auth/local/register", {
            email,
            password,
            username
        })

        .then(response => {
            const form = document.querySelector("#register-form");
            form.innerHTML = `<p class="text-[#ba9761] text-2xl text-center">You're registered.</p>`

            return response;
        })

        .catch(error => {
            console.log(error);

            const p = document.createElement("p");
            p.classList.add("errorMsg");
            const button = document.querySelector("#form-button");
            p.style.color = "red";
            button.insertAdjacentElement("beforebegin", p)
            p.textContent = error.response.data.error.message;
        });

}

export default registerUser;