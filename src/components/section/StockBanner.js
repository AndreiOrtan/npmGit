import gen from "../../../lib/generateElement/generateElement";
import "./StockBanner.css";

function createSection(props) {
  const { company, companyInfo, currentPrice, oldPrice } = props;
  const percent = (100 - (props.oldPrice / props.currentPrice) * 100).toFixed(
    2
  );

  const priceDiff = (currentPrice - oldPrice).toFixed(2);

  let operator = "";
  if (props.currentPrice > props.oldPrice) {
    operator = "+";
  }

  return gen("section", { class: "row card-panel" }, [
    gen("div", { class: "col s12 m4 l6" }, [
      gen("div", { class: "company" }, [company]),
      gen("div", { class: "company-info" }, [companyInfo]),
    ]),
    gen("div", { class: "col s12 m4 l6 right-align" }, [
      gen("div", { class: "current-price" }, ["$" + currentPrice]),
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
