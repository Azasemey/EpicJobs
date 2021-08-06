"use strict";
const gamesDescr = document.querySelectorAll(".game-tabs-content > div");
const mainTabs = document.querySelectorAll(".game-tabs > button");
const vacTabs = document.querySelectorAll(".vac-block > ul > li > button");
const vacDescr = document.querySelectorAll(".descr-img");
// console.log(vacTabs);
function tabSwitcher(buttons, blocks, dataSet) {
  buttons.forEach((el) =>
    el.addEventListener("click", function (e) {
      const active = e.target.closest("button");
      blocks.forEach((v) => {
        v.classList.add("none");
        active.classList.remove("active");
      });
      buttons.forEach((v) => {
        v.classList.remove("active");
      });
      document
        .getElementById(`${e.target.dataset[dataSet]}`)
        .classList.remove("none");
      active.classList.add("active");
    })
  );
}

tabSwitcher(mainTabs, gamesDescr, "game");
tabSwitcher(vacTabs, vacDescr, "vac");
