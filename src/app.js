import createHeader from "./components/header/header";
import StockBanner from "./components/section/StockBanner";

function app(element) {
  element.appendChild(createHeader());
  const divLayout = document.createElement("div");
  divLayout.className = "layout";
  divLayout.appendChild(
    StockBanner({
      company: "Apple Inc",
      companyInfo: "Apple has the best software.",
      currentPrice: "$183.32",
      currentChange: "+$13.87(+9.87%)",
    })
  );
  element.appendChild(divLayout);
}

export default app;
