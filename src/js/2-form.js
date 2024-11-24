const KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

document.addEventListener("DOMContentLoaded", () => {
    const s = localStorage.getItem(KEY);
    if (s) {
        formData = JSON.parse(s);
        inputEmail.value = formData.email;
        inputMessage.value = formData.message;
    }
});

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(KEY);
    formData = { email: "", message: "" };
    form.reset();
});