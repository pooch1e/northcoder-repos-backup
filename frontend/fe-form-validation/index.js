// This will contain the JS for index.html - be sure to link to the correct file.
const firstNameRegex = /^[\p{L}\p{M}'-]+(?: [\p{L}\p{M}'-]+)*$/u;

const firstName = document.getElementById('first-name');
const topTextForm = document.getElementById('top-text-form');
const bottomTextForm = document.getElementById('bottom-text-form');
const nameError = document.getElementById('name-error');
const form = document.getElementById('text-generation');
const icon = document.getElementById('tick');
const img = document.createElement('img');

const counterOne = document.getElementById('counter-1');
const counterTwo = document.getElementById('counter-2');



//FirstName Validation
function validateName(event) {
  if (!firstNameRegex.test(firstName.value)) {
    event.preventDefault();

    img.src = './red-cross.svg';
    img.alt = 'Red Cross'; // optional
    console.log(icon, 'i am icon');
    icon.appendChild(img);
    nameError.textContent = 'Invalid characters in name field';
    firstName.classList.add('error');
  } else {
    console.log('validate name works');
    img.src = './green-tick.svg';
    img.alt = 'Green Tick'; // optional
    console.log(icon, 'i am icon');
    icon.appendChild(img);

    nameError.textContent = '';
    firstName.classList.remove('error');
  }
}

let counterTitle = 0;
let counterBottomText = 0;
const textContent = [];
// 
const counter = (event) => {
  console.log('this is working')
  let content = event.target.value;
  // console.log(event.target.value);
  // killed it
  counterOne.textContent = content.length;
}

const counter2 = (event) => {
  console.log('this is working')
  let content = event.target.value;
  // console.log(event.target.value);
  // killed it
  counterTwo.textContent = content.length;
}


firstName.addEventListener('blur', validateName); // fill in
topTextForm.addEventListener('input', counter)
bottomTextForm.addEventListener('input', counter2)
form.addEventListener('submit', validateName);

// form.addEventListener("submit", handleSubmit);

console.log(firstName);
console.log(topTextForm);
console.log(bottomTextForm);

