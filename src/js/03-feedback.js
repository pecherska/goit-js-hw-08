import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);


restoreFormData();
function restoreFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
    const parsedData = JSON.parse(savedData)
    const elements = form.querySelectorAll('[name]')

    for (const element of elements) {
        if (Object.keys(parsedData).includes(element.name)) {
            element.value = parsedData[element.name];
            formData[element.name] = parsedData[element.name];

            console.log(element)
        }
        }
    }

        return;
}

function formInput(event) {
    formData[event.target.name] = event.target.value;

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function formSubmit(event) {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    event.preventDefault();
    console.log(savedData);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

