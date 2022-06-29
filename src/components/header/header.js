import generateElement from "../../../lib/generateElement/generateElement";
import "./header.css";

function createHeader() {
  const div1 = generateElement("div", { class: "container" });
  const title = generateElement(
    "h3",
    {
      class: "main_header",
    },
    ["My React!"]
  );
  div1.appendChild(title);
  const nav = generateElement(
    "nav",
    {
      class: "grey darken-3",
    },
    [div1]
  );
  return nav;
}

export default createHeader;
