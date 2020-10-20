import "./style.css";
import { createButtonElement } from "./button";
import { createInputElement } from "./inputfield";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Countdown Timer";
  element.classList.add("countdown-container");

  // const btn = document.createElement("button");
  // btn.innerHTML = "Click!";
  // btn.classList.add("action_btn");

  // const input = document.createElement("input");
  // input.text = "HelloWorld";
  // input.classList.add("time-input");
  element.appendChild(createInputElement),
    element.appendChild(createButtonElement);

  return element;
}

document.body.appendChild(component());
