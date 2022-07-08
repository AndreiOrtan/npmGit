import createHeader from "./components/header/header";
import createSection from "./components/section/section";

function app(element) {
  element.appendChild(createHeader());
  element.appendChild(createSection());
}

export default app;
