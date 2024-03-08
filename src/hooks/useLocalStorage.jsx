import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // ilk açılışta localstorage okuyoruz
    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {
      // boşsa default değeri, localStorage'a atıyoruz
      // aynı değeri dönüyoruz
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      // localstorage boş değilse
      // defaultValue değerini dönüyoruz
      return localVal;
    }
  });
  // value değiştiğinde localstorage'a yazıyoruz
  // ve yeni değeri dönüyoruz
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
/* 
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme') */