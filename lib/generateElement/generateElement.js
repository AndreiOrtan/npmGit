function generateElement(type, attributes, childEls = []) {
  const element = document.createElement(type);
  const possibleAttr = ["style", "class", "id", "onclick", "onblur"];
  for (const currentAtr of possibleAttr) {
    if (attributes[currentAtr]) {
      element.setAttribute(currentAtr, attributes[currentAtr]);
    }
  }
  for (const el of childEls) {
    const node = typeof el === "string" ? document.createTextNode(el) : el;
    element.appendChild(node);
  }

  return element;
}

export default generateElement;
