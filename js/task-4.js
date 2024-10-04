const enterForm = document.querySelector(".login-form");
const email = document.querySelector("email");


enterForm.addEventListener("submit", event => {
    event.preventDefault()
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const objectForm = {
    email: email,
    password: password
}
    if (email === '' || password === '') {
        return alert("All form fields must be filled in")
    }
   console.log(objectForm);
    enterForm.reset();
})