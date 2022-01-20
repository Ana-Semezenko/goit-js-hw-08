import throttle from "lodash.throttle";

const formData = {};
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};

populateTextInput();

refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
});

refs.form.addEventListener("input", throttle((e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))

function populateTextInput() {

    const userData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if(userData && Object.values(userData) !== [ ] ) {

        refs.input.value = userData.email;
        refs.textarea.value = userData.message;
        formData.email = userData.email;
        formData.message = userData.message;

    }
}