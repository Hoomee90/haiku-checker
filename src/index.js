import './scss/styles.scss';
import 'bootstrap';
import { checkHaiku } from './js/utils.js';

const handleSubmit = (e) => {
  e.preventDefault();

  const haiku = [...e.currentTarget.querySelectorAll("input")].map(el => el.value);
  document.querySelector("#output").innerText = checkHaiku(haiku);
}

document.querySelector("form#check").addEventListener("submit", handleSubmit);