"use strict";

const dice = document.querySelector(".icon-dice");
let wrapper = document.querySelector(".wrapper");
let html;
const renderAdvice = function (data) {
    wrapper.innerHTML = ''
  html = `
    <small id="advice-id">Advice #${data.id}</small>
    <p class="quotes">
      ${data.advice}
    </p>
    `;
 wrapper.insertAdjacentHTML("afterbegin", html);
};

const getAdvice = async function () {
  // Generates a random number between 1 and 200
  const ran = Math.floor(Math.random() * 200) + 1;

  const res = await fetch(`https://api.adviceslip.com/advice/${ran}`);
  const { slip } = await res.json();
  renderAdvice(slip);
};

dice.addEventListener("click", function () {
  getAdvice();
});
