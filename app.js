"use strict";

const dice = document.querySelector(".icon-dice");
let wrapper = document.querySelector(".wrapper");
let html;
const renderAdvice = function (data) {
  wrapper.innerHTML = "";
  html = `
    <small id="advice-id">Advice #${data.id}</small>
    <p class="quotes">
      ${data.advice}
    </p>
    `;
  wrapper.insertAdjacentHTML("afterbegin", html);
};

const renderError = function (errorMsg) {
  wrapper.innerHTML = "";
  html = `
    <p class="quotes">
      ${errorMsg}
    </p>
    `;
  wrapper.insertAdjacentHTML("afterbegin", html);
};

const getAdvice = async function () {
  try {
    // Generates a random number between 1 and 200
    const ran = Math.floor(Math.random() * 200) + 1;

    const res = await fetch(`https://api.adviceslip.com/advice/${ran}`);
    const { slip } = await res.json();
    renderAdvice(slip);
  } catch (err) {
    renderError(
      "Failed to fetch advice. Please check your internet connection."
    );
  }
};

getAdvice()

dice.addEventListener("click", function () {
  getAdvice();
});
