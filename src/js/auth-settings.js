import { initializeApp } from 'firebase/app';

export const firebaseSettings = initializeApp({
  appName: 'BookProject',
  apiKey: 'AIzaSyCeohKwpW6233js3UPE5dhzJtQnOMgZfaI',
  authDomain: 'itsharks-books-project.firebaseapp.com',
  databaseURL: 'https://itsharks-books-project-default-rtdb.firebaseio.com',
  projectId: 'itsharks-books-project',
  storageBucket: 'itsharks-books-project.appspot.com',
  messagingSenderId: '560994919300',
  appId: '1:560994919300:web:10cdf4110616a9d01f33d1',
});
