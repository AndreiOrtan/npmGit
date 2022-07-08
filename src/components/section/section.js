import gen from "../../../lib/generateElement/generateElement";
import "./section.css";

function createSection() {
  return gen("section", { class: "row card-panel" }, [
    gen("div", { class: "container" }, [
      gen("ul", { class: "col s12 m4 l6" }, [
        gen("li", { class: "list-item" }, ["Apple Inc. (AAPL)"]),
        gen("li", { class: "list-item" }, ["Apple has the best software."]),
      ]),
      gen("ul", { class: "col s12 m4 l6 right-align" }, [
        gen("li", { class: "list-item current-price" }, ["$187.63"]),
        gen("li", { class: "list-item current-change" }, ["+$11.65(+2.43%)"]),
        gen("li", { class: "list-item current-date" }, [`${new Date()}`]),
      ]),
    ]),
  ]);
}
export default createSection;
