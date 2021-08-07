"use strict";
const gamesDescr = document.querySelectorAll(".game-tabs-content > div");
const mainTabs = document.querySelectorAll(".game-tabs > button");
const vacTabs = document.querySelectorAll("ul.vacancies > li > button");
const vacDescr = document.querySelectorAll(".descr-img");
const mobVac = document.querySelectorAll(".mob");
const vacDiv = document.querySelector("div.game > div");
const dImg = document.querySelector("#destiny-all img");
const hsImg = document.querySelector("#hs-all img");
const dotaImg = document.querySelector("#dota-all img");
function tabs() {
  mainTabs.forEach((e) => {
    e.addEventListener("click", function (el) {
      const btnGame = el.target.closest("button");
      const vac = document.querySelector(
        `#${btnGame.dataset.game}> div > div > ul > li:nth-child(1) > button`
      );
      const vacM = document.querySelector(
        `#mob-${btnGame.dataset.game}>  ul > li:nth-child(1) > button`
      );
      mainTabs.forEach((b) => b.classList.remove("active"));
      btnGame.classList.add("active");
      vacTabs.forEach((v) => v.classList.remove("active"));
      vacDescr.forEach((d) => d.classList.add("none"));
      vac?.classList.add("active");
      vacM?.classList.add("active");
      if (btnGame.dataset.game === "destiny") {
        document.getElementById("destiny-all").classList.remove("none");
        if (dImg.getAttribute("src") !== dImg.dataset.src) {
          dImg.src = dImg.dataset.src;
        }
        dImg.addEventListener("load", function () {
          dImg.classList.remove("lazy-img");
        });
      } else if (btnGame.dataset.game === "hs") {
        document.getElementById("hs-all").classList.remove("none");
        if (hsImg.getAttribute("src") !== hsImg.dataset.src) {
          hsImg.src = hsImg.dataset.src;
        }
        hsImg.addEventListener("load", function () {
          hsImg.classList.remove("lazy-img");
        });
      } else if (btnGame.dataset.game === "dota") {
        document.getElementById("dota-all").classList.remove("none");
        if (dotaImg.getAttribute("src") !== dotaImg.dataset.src) {
          dotaImg.src = dotaImg.dataset.src;
        }
        dotaImg.addEventListener("load", function () {
          dotaImg.classList.remove("lazy-img");
        });
      }
      mainTabs.forEach((b) => {
        if (b.classList.contains("active")) {
          gamesDescr.forEach((v) => v.classList.add("none"));
          mobVac.forEach((v) => v.classList.add("none"));
          document.getElementById(b.dataset.game).classList.remove("none");
          document
            .getElementById(`mob-${b.dataset.game}`)
            ?.classList.remove("none");
          document.getElementById(vac?.dataset.vac)?.classList.remove("none");
        }
      });
    });
  });
  vacTabs.forEach((e) => {
    e.addEventListener("click", function (e) {
      const vac = e.target;
      vacTabs.forEach((b) => b.classList.remove("active"));
      vac.classList.add("active");
      vacDescr.forEach((v) => v.classList.add("none"));
      vacTabs.forEach((v) => {
        if (v.classList.contains("active")) {
          document.getElementById(v.dataset.vac).classList.remove("none");
          v;
        }
      });
    });
  });
}
tabs();

// Lazy loading
const monetizeBG = document.querySelector(".monetize");

window.addEventListener("load", function () {
  monetizeBG.style.backgroundImage = `url("../img/monetize-bg.jpg")`;
  monetizeBG.style.filter = `none`;
  monetizeBG.style.webkitFilter = `none`;
});

// const navbar = document.querySelector(".header");

// const sticky = navbar.offsetTop;
// console.log(window.pageYOffset, sticky);
// function stick() {
//   if (window.pageYOffset > sticky + 200) {
//     console.log(window.pageYOffset, sticky);
//     navbar.classList.add("sticky");
//   } else {
//     console.log(window.pageYOffset, sticky);
//     navbar.classList.remove("sticky");
//   }
// }
// window.addEventListener("scroll", stick);
