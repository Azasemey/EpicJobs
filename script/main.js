"use strict";
const gamesDescr = document.querySelectorAll(".game-tabs-content > div");
const mainTabs = document.querySelectorAll(".game-tabs > button");
function tabSwitcher(buttons, blocks) {
  buttons.forEach((el) =>
    el.addEventListener("click", function (e) {
      blocks.forEach((v) => v.classList.add("none"));
      document
        .getElementById(`${e.target.dataset.game}`)
        .classList.remove("none");
    })
  );
}
tabSwitcher(mainTabs, gamesDescr);
