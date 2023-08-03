import createElement from "../helpers/domHelper";

export function createBtn(className, innerHTML, callback) {
  const button = createElement({ tagName: "button", className });
  button.innerHTML = innerHTML;
  button.addEventListener("click", callback);
  return button;
}
