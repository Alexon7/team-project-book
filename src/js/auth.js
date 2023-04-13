import { initializeApp } from 'firebase/app';
import {
  AuthErrorCodes,
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

console.log(AuthErrorCodes);
const userEmail = document.querySelector('#user_email');
const userPassword = document.querySelector('#user_password');

const btnLogin = document.querySelector('#btnLogin');
const btnSignup = document.querySelector('#btnSignup');

const btnLogout = document.querySelector('#btnLogout');

const messageLogin = document.querySelector('.message__login');
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
console.log(auth);
// Create new account using email/password
const createAccount = async event => {
  event.preventDefault();
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();

  try {
    await createUserWithEmailAndPassword(auth, email, password).then(res => {
      console.log(res);
      console.log(res.email);
    });
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
    console.log(showLoginError(error));
  }
};

btnSignup.addEventListener('click', createAccount);

const showLoginForm = () => {
  userEmail.style.display = 'block';
  userPassword.style.display = 'block';
};

const showApp = () => {
  userEmail.style.display = 'block';
  userPassword.style.display = 'block';
};

//  const hideLoginError = () => {
//   divLoginError.style.display = 'none';
//   lblLoginErrorMessage.innerHTML = '';
// };

const showLoginError = error => {
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    alert('Wrong password. Try again.');
  } else {
    alert(`Error: ${error.message}`);
  }
};

const showLoginState = user => {
  console.log(
    // `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
    `You're logged in as  email: ${user.email}) `
  );
  messageLogin.innerHTML = `You're logged in`;
};

// hideLoginError();

// Login using email/password
const loginEmailPassword = async e => {
  e.preventDefault();

  const loginEmail = userEmail.value.trim();
  const loginPassword = userPassword.value.trim();

  // step 1: try doing this w/o error handling, and then add try/catch
  // await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

  // step 2: add error handling
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
};

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      console.log(auth);
      // showApp();
      showLoginState(user);

      // hideLoginError();
      // hideLinkError();
    } else {
      showLoginForm();
      messageLogin.innerHTML = '';
      messageLogin.insertAdjacentHTML(
        'beforeend',
        `<p>You're not logged in.</p>`
      );
    }
  });
};

// Log out
const logout = async () => {
  await signOut(auth);
};

btnLogin.addEventListener('click', loginEmailPassword);
btnLogout.addEventListener('click', logout);

monitorAuthState();
// console.log(auth);
