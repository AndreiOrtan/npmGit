import createHeader from "./components/header/Header";
import StockBanner from "./components/section/StockBanner";
import Layout from "./components/layout/Layout.js";

const companies = [
  {
    company: "Apple Inc",
    companyInfo: "Apple has the best software.",
    currentPrice: 311.58,
    oldPrice: 289.44,
  },
  {
    company: "Amazon Inc",
    companyInfo: "Amazon.com, Inc. is an American company.",
    currentPrice: 271.58,
    oldPrice: 289.44,
  },
  {
    company: "Google LLC",
    companyInfo:
      "Google LLC is a company that focuses on artificial intelligence",
    currentPrice: 211.58,
    oldPrice: 189.44,
  },
  {
    company: "Facebook Inc",
    companyInfo: "Facebook is an American multinational",
    currentPrice: 451.58,
    oldPrice: 439.44,
  },
];

function app(element) {
  element.appendChild(createHeader());
  for (const company of companies) {
    Layout.appendChild(StockBanner(company));
  }

  element.appendChild(Layout);
}

export default app;
