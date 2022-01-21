import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};


const storage = 'feedback-form-state';
const formData = {};


if (localStorage[storage]) {

    const userLocalData = JSON.parse(localStorage[storage]);

    refs.input.value = userLocalData.email;
    refs.textarea.value = userLocalData.message;
};


refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    const userData = new FormData(refs.form);

    userData.forEach((value, name) => {

        userData[name] = value;
        localStorage.setItem(storage, JSON.stringify(formData));

    });
};


refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const userLocalData = JSON.parse(localStorage[storage]);
    console.log(userLocalData);

    localStorage.clear();

    refs.input.value = "";
    refs.textarea.value = "";
};