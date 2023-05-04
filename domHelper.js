function createElement(
  tag, classList, attributes, textContent, heandlers, children, childrenAction) {
  const element = document.createElement(tag);

  if (classList?.length) {
    element.classList.add(...classList);
  }

  if (attributes?.length) {
    attributes.forEach(({ prop, value }) => {
      element.setAttribute(prop, value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (heandlers?.length) {
    heandlers.forEach(({ event, heandler }) => {
      element.addEventListener(event, heandler);
    });
  }

  if (children) {
    element[childrenAction](...children);
  }

  return element;
}

function createInput() {
  const inputAttributes = [
    {
      prop: "name",
      value: "text",
    },
  ];
  return createElement("textarea", ["screen"], inputAttributes);
}

function createBoard() {
  return createElement("div", ["inner"]);
}

function createWrapper() {
  return createElement("div", ["wrapper"]);
}