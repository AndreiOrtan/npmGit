import createHeader from "./components/header/Header";
import StockBanner from "./components/section/StockBanner";
import Layout from "./components/layout/Layout.js";
import companies from "../data/mockCompanies";
import "./app.css";

function app(element) {
  element.appendChild(createHeader());

  companies.forEach((company) => {
    Layout.appendChild(StockBanner(company));
  });

  element.appendChild(Layout);

  Layout.addEventListener("click", (e) => {
    const sections = Layout.querySelectorAll("section");
    for (const section of sections) {
      section.classList.remove("highlight");
    }
    e.target.closest("section").classList.add("highlight");
  });
}

export default app;
