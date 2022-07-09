import gen from "../../../lib/generateElement/generateElement";
import "./StockBanner.css";

function createSection(props) {
  return gen("section", { class: "row card-panel" }, [
    gen("div", { class: "col s12 m4 l6" }, [
      gen("div", { class: "company" }, [props.company]),
      gen("div", { class: "company-info" }, [props.companyInfo]),
    ]),
    gen("div", { class: "col s12 m4 l6 right-align" }, [
      gen("div", { class: "current-price" }, [props.currentPrice]),
      gen("div", { class: "current-change" }, [props.currentChange]),
      gen("div", { class: "current-date" }, [`${new Date()}`]),
    ]),
  ]);
}
export default createSection;
