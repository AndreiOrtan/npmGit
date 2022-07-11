import createHeader from "./components/header/Header";
import StockBanner from "./components/section/StockBanner";
import Layout from "./components/layout/Layout.js";

function app(element) {
  element.appendChild(createHeader());
  Layout.appendChild(
    StockBanner({
      company: "Apple Inc",
      companyInfo: "Apple has the best software.",
      currentPrice: 191.58,
      oldPrice: 183.44,
    })
  );
  element.appendChild(Layout);
}

export default app;
