import gen from "../../../lib/generateElement/generateElement";
import "./StockBanner.css";

function createSection(props) {
  function isWhatPercentOf(num1, num2) {
    return (num1 / num2) * 100;
  }
  return gen("section", { class: "row card-panel" }, [
    gen("div", { class: "col s12 m4 l6" }, [
      gen("div", { class: "company" }, [props.company]),
      gen("div", { class: "company-info" }, [props.companyInfo]),
    ]),
    gen("div", { class: "col s12 m4 l6 right-align" }, [
      gen("div", { class: "current-price" }, ["$" + props.currentPrice]),
      gen("div", { class: "old-price" }, [
        `\$${(props.currentPrice - props.oldPrice).toFixed(2)}`,

        ` (+${(
          100 - isWhatPercentOf(props.oldPrice, props.currentPrice)
        ).toFixed(2)}%)`,
      ]),
      gen("div", { class: "current-date" }, [`${new Date()}`]),
    ]),
  ]);
}
export default createSection;
