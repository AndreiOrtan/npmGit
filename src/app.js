import createElement from "./components/header/header";

const divContainer = document.querySelector(".container");

function app() {
  divContainer.append(createElement());
}

export default app;
