import { initializeApp } from 'firebase/app';
import {
  AuthErrorCodes,
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const txtEmail = document.querySelector('#user_email');
export const txtPassword = document.querySelector('#user_password');

// export const btnLogin = document.querySelector('#btnLogin');
export const btnSignup = document.querySelector('#btnSignup');

// export const btnLogout = document.querySelector('#btnLogout');

// export const divAuthState = document.querySelector('#divAuthState');
// export const lblAuthState = document.querySelector('#lblAuthState');

// export const divLoginError = document.querySelector('#divLoginError');
// export const lblLoginErrorMessage = document.querySelector(
//   '#lblLoginErrorMessage'
// );

const firebaseSettings = initializeApp({
  apiKey: 'AIzaSyCeohKwpW6233js3UPE5dhzJtQnOMgZfaI',
  authDomain: 'itsharks-books-project.firebaseapp.com',
  databaseURL: 'https://itsharks-books-project-default-rtdb.firebaseio.com',
  projectId: 'itsharks-books-project',
  storageBucket: 'itsharks-books-project.appspot.com',
  messagingSenderId: '560994919300',
  appId: '1:560994919300:web:10cdf4110616a9d01f33d1',
});
const auth = getAuth(firebaseSettings);

// Create new account using email/password
const createAccount = async event => {
  event.preventDefault();
  const email = user_email.value.trim();
  const password = user_password.value.trim();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

btnSignup.addEventListener('click', createAccount);


const showLoginForm = () => {
  // login.style.display = 'block';
  // app.style.display = 'none';
};

// export const showApp = () => {
//   login.style.display = 'none';
//   app.style.display = 'block';
// };

// export const hideLoginError = () => {
//   divLoginError.style.display = 'none';
//   lblLoginErrorMessage.innerHTML = '';
// };

// export const showLoginError = error => {
//   if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
//     alert('Wrong password. Try again.');
//   } else {
//     alert(`Error: ${error.message}`);
//   }
// };

// export const showLoginState = user => {
//   alert(`You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `);
// };

// hideLoginError();



// Login using email/password
// const loginEmailPassword = async () => {
//   const loginEmail = user_email.value.trim();
//   const loginPassword = user_password.value.trim();

  // step 1: try doing this w/o error handling, and then add try/catch
  // await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

  // step 2: add error handling
  // try {
  //   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  // }
  // catch(error) {
  //   console.log(`There was an error: ${error}`)
  //   showLoginError(error)
  // }
// };



// Monitor auth state
// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user);
//       showApp();
//       showLoginState(user);

//       // hideLoginError();
//       hideLinkError();
//     } else {
//       showLoginForm();
//       // lblAuthState.innerHTML = `You're not logged in.`;
//       alert(`You're not logged in.`);
//     }
//   });
// };

// Log out
// const logout = async () => {
//   await signOut(auth);
// };

// btnLogin.addEventListener('click', loginEmailPassword);
// btnLogout.addEventListener('click', logout);

// monitorAuthState();
