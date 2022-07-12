import createHeader from "./components/header/Header";
import StockBanner from "./components/section/StockBanner";
import Layout from "./components/layout/Layout.js";
import companies from "../data/mockCompanies";

function app(element) {
  element.appendChild(createHeader());

  companies.forEach((company) => {
    Layout.appendChild(StockBanner(company));
  });

  element.appendChild(Layout);
}

export default app;
