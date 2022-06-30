import gen from "../../../lib/generateElement/generateElement";
import "./header.css";

function createHeader() {
  return (
    //
    gen("nav", { class: "grey darken-3" }, [
      gen("div", { class: "container" }, [
        gen("h3", { class: "main_header" }, ["My React!"]),
      ]),
    ])
  );
}

export default createHeader;
