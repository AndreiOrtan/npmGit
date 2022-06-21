function createElement() {
  const element = document.createElement("header");
  element.style.color = "red";
  element.textContent = "This is Ortan's page.";
  element.classList.toggle("title");

  return element;
}

import css from "../header/header.css";
export default createElement;
