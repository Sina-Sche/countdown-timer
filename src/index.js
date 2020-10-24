import "./style.css";
import { createSubmitCountdown } from "./countdown";
import { createInputElement } from "./inputfield";
import { createElement } from "../utils/elements";

function component() {
  const element = createElement("div", {
    className: "countdown-container",
    innerHTML: "Countdown Timer ⏰",
    children: [createInputElement(), createSubmitCountdown()],
  });

  return element;
}

document.body.appendChild(component());
