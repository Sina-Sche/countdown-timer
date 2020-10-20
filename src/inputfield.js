import { createElement } from "../utils/elements";

export const createInputElement = () => {
  const inputField = createElement("input", {
    type: "number",
    className: "time_input",
    placeholder: "enter number",
  });
  return inputField;
};
