import { initializeApp } from 'firebase/app';
const registerForm = document.querySelector('.auth__form');
const registerButton = registerForm.querySelector('.auth__button__signup');
// const name = registerForm.querySelector('#user_name');
// const email = registerForm.querySelector('#user_email');
// const password = registerForm.querySelector('#user_password');
const API_KEY = 'AIzaSyCeohKwpW6233js3UPE5dhzJtQnOMgZfaI';


async function signupWithEmailAndPassword(email, password) {
  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(response => response.json())
    .then(data => console.log(data));
  // console.log(inputName.value);
  // console.log(inputEmail.value);
  // console.log(inputPassword.value);
}

function authFormHandler(event) {
  event.preventDefault();
  const name = event.target.querySelector('#user_name');
  const email = event.target.querySelector('#user_email');
  const password = event.target.querySelector('#user_password');
  // console.log(name.value, email.value, password.value);
  signupWithEmailAndPassword(email, password);
}

registerForm.addEventListener('submit', authFormHandler);
