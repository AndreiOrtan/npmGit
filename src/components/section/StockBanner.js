import gen from "../../../lib/generateElement/generateElement";
import "./StockBanner.css";

function createSection(props) {
  function isWhatPercentOf(num1, num2) {
    return (num1 / num2) * 100;
  }
  const percent = (
    100 - isWhatPercentOf(props.oldPrice, props.currentPrice)
  ).toFixed(2);

  const priceDiff = (props.currentPrice - props.oldPrice).toFixed(2);

  let operator = "";
  if (props.currentPrice > props.oldPrice) {
    operator = "+";
  }

  return gen("section", { class: "row card-panel" }, [
    gen("div", { class: "col s12 m4 l6" }, [
      gen("div", { class: "company" }, [props.company]),
      gen("div", { class: "company-info" }, [props.companyInfo]),
    ]),
    gen("div", { class: "col s12 m4 l6 right-align" }, [
      gen("div", { class: "current-price" }, ["$" + props.currentPrice]),
      gen(
        "div",
        {
          class: "old-price",
          style: priceDiff < 0 ? "color:red" : "color:green",
        },
        [`\$${priceDiff}(${operator}${percent}%)`]
      ),
      gen("div", { class: "current-date" }, [`${new Date()}`]),
    ]),
  ]);
}
export default createSection;
