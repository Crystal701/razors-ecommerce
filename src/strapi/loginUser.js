import axios from "axios";
import { setupUser } from "../strapi/setupUser.js";

async function loginUser(email, password) {
    const error = document.querySelector(".errorMsg");
    error?.remove();

    await axios
        .post("http://localhost:1337/api/auth/local", {
            identifier: email,
            password
        })

        .then(response => {
            setupUser(response);
            return response;
        })

        .catch(error => {
            console.log(error);

            const p = document.createElement("p");
            p.classList.add("errorMsg");
            const button = document.querySelector("#form-button");
            p.style.color = "red";
            button.insertAdjacentElement("beforebegin", p)
            p.textContent = `You may not be registered / ${error.response.data.error.message}`;
        })
}

export default loginUser;