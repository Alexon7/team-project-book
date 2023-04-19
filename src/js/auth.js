import { firebaseSettings } from './auth-settings';
import {
  AuthErrorCodes,
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { Database } from 'firebase/database';
// import { databaseURL } from 'firebase/firebase-database';

const elipsBackDrop = document.querySelector('.elips');
const authBackDrop = document.querySelector('.auth__backdrop');
const authForm = document.querySelector('.auth__form');
const authButtonClose = document.querySelector('.auth__button__close');
const userNickname = document.querySelector('#user_name');
const userEmail = document.querySelector('#user_email');
const userPassword = document.querySelector('#user_password');
const btnLogin = document.querySelector('#btnLogin');
const btnSignup = document.querySelector('#btnSignup');
const btnLogout = document.querySelector('#btnLogout');
const linkSignUp = document.querySelector('.link__signup');
const linkSignIn = document.querySelector('.link__signin');
const blockSignUP = document.querySelector('.signup__block');
const messageLogin = document.querySelector('.message__login');
const avatarNickName = document.querySelector('.users-login');
const userInterface = document.querySelector(
  '.users-data--tablet'
).lastElementChild;
const signupDesktop = document.querySelector('.sign-up__btn');
const avatarNickNameMobile = document.getElementById('user-login-mobile');
const logoutMobile = document.getElementById('log-out-mobile');
const userDataMobile = document.querySelector('.users-data');
const userSignupMobile = document.getElementById('sign-up-mobile');

console.log(avatarNickNameMobile);

const auth = getAuth(firebaseSettings);

const showModal = () => {
  authBackDrop.classList.remove('is-hidden');
};

// Login using email/password
const loginEmailPassword = async e => {
  e.preventDefault();
  const loginEmail = userEmail.value.trim();
  const loginPassword = userPassword.value.trim();
  console.log(loginEmail);
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
  // monitorAuthState();
};

const showLoginError = error => {
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    alert('Wrong password. Try again.');
  } else {
    alert(`Error: ${error.message}`);
  }
};

const showLoginState = user => {
  messageLogin.insertAdjacentHTML(
    'beforeend',
    `<p class="auth__true__notify">You're logged in as <span>${user.email}<span></p>`
  );
  hideButtons();
};

function hideButtons() {
  authForm.style.display = 'none';
  btnLogout.style.display = 'block';
}

linkSignIn?.addEventListener('click', () => {
  btnLogin.disabled = false;
  btnLogin.style.display = '';
  btnSignup.style.display = 'none';
  linkSignUp.style.display = '';
  linkSignIn.style.display = 'none';
  userNickname.style.display = 'none';
  messageLogin.innerHTML = '';
  blockSignUP.classList.remove('is-hidden');

  messageLogin.insertAdjacentHTML(
    'beforeend',
    `<p class="auth__false__notify">You're not logged in</p>`
  );
});

linkSignUp?.addEventListener('click', () => {
  btnLogin.style.display = 'none';
  btnSignup.style.display = 'block';
  blockSignUP.classList.add('is-hidden');
  linkSignIn.style.display = 'block';
  userNickname.style.display = 'block';
  btnLogin.disabled = true;
  messageLogin.innerHTML = '';
  authForm.reset();
  messageLogin.insertAdjacentHTML(
    'beforeend',
    `<p class="auth__notify">You can SIGN UP on this website</p>`
  );
});

// Create new account using email/password
const createAccount = async event => {
  event.preventDefault();
  const nickname = userNickname.value.trim();
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();
  userNickname.style.display = 'block';
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateUserNickname(nickname);
    });
  } catch {
    error => {
      console.log(error);
    };
  }
  setTimeout(() => {
    location.reload();
  }, 500);
};

btnSignup?.addEventListener('click', createAccount);

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      messageLogin.innerHTML = '';
      userInterface.style.display = 'flex';
      signupDesktop.classList.add('is-hidden');
      userDataMobile.classList.remove('is-hidden');
      logoutMobile.classList.remove('is-hidden');
      userSignupMobile.classList.add('is-hidden');

      showLoginState(user);
      setTimeout(() => {
        authBackDrop.classList.add('is-hidden');
      }, 500);

      if (user.displayName !== null) {
        avatarNickName.textContent = `${user.displayName}`;
        avatarNickNameMobile.textContent = `${user.displayName}`;
      } else {
        avatarNickName.textContent = `${user.email}`.slice(0, 2).toUpperCase();
        avatarNickNameMobile.textContent = `${user.email}`
          .slice(0, 2)
          .toUpperCase();
        avatarNickName.style.color = 'grey';
      }
    } else {
      messageLogin.innerHTML = '';
      messageLogin.insertAdjacentHTML(
        'beforeend',
        `<p class="auth__false__notify">You're not logged in</p>`
      );
      showLoginForm();
      userInterface.style.display = 'none';
      userDataMobile.classList.add('is-hidden');
      logoutMobile.classList.add('is-hidden');
    }
  });
};

const showLoginForm = () => {
  authForm.style.display = 'block';
  btnLogout.style.display = 'none';
  userNickname.style.display = 'none';
  userEmail.value = '';
  userPassword.value = '';
  window.addEventListener('keydown', closeModal);
  window.addEventListener('click', closeModalOnBackDrop);
};

// Log out
export const logout = async () => {
  await signOut(auth);
  signupDesktop.classList.remove('is-hidden');
  location.reload();
};

btnLogin?.addEventListener('click', loginEmailPassword);
btnLogout?.addEventListener('click', logout);
authButtonClose?.addEventListener('click', () => {
  authBackDrop.classList.add('is-hidden');
});
logoutMobile.addEventListener('click', logout);
userSignupMobile.addEventListener('click', showModal);

const logoutDesktop = document.querySelector('.dropdown-content');

logoutDesktop.onclick = function (event) {
  if (event.target === logoutDesktop) {
    logout();
  }
};
monitorAuthState();

function closeModal(event) {
  if (event.code === 'Escape') {
    authBackDrop.classList.add('is-hidden');
  }
}
function closeModalOnBackDrop(event) {
  if (event.target === elipsBackDrop) {
    authBackDrop.classList.add('is-hidden');
  }
  if (event.target === authBackDrop) {
    authBackDrop.classList.add('is-hidden');
  }
}

const updateUserNickname = nickname => {
  updateProfile(auth.currentUser, {
    displayName: nickname,
  });
};
