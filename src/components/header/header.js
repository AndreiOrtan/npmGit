import "./header.css";

function createElement() {
  const element = document.createElement("h3");
  element.textContent = "My React App!";
  element.className = "main_header";
  return element;
}

export default createElement;
