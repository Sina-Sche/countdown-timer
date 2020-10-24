// import { Countdown } from "./countdown";
import { createElement } from "../utils/elements"; //import element.js from utils
import { createInputElement } from "./inputfield";

export const createSubmitCountdown = () => {
  const outputContainer = createElement("div", {
    className: "outputContainer",
  });

  const enterButton = createElement("button", {
    className: "enter_btn",
    innerText: "Start Countdown",
    type: "submit",
    onclick: () => {
      const seconds = document.querySelector(".time_input").value;
      startCountdown(seconds, outputContainer);
    },
  });
  const submitContainer = createElement("div", {
    classname: "submitContainer",
    children: [enterButton, outputContainer],
  });
  return submitContainer;
};

export const startCountdown = (seconds, outputContainer) => {
  let counter = seconds; // create variable equal to value of inputfield
  const interval = setInterval(() => {
    console.log(counter);
    counter--; //counter minus 1
    outputContainer.innerText = counter; //display current number in outputContainer

    if (counter === 0) {
      clearInterval(interval);
      console.log("ding!");
      alert("time's up!");
    }
  }, 1000);
};
