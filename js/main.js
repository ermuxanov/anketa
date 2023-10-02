// task two
let slider = document.getElementById("taskRange");
const badFace = document.getElementById("bad"),
  normalFace = document.getElementById("normal"),
  goodFace = document.getElementById("good"),
  bestFace = document.getElementById("best");

slider.oninput = function () {
  slider.value >= 6 && slider.value <= 10
    ? badFace.classList.add("active")
    : badFace.classList.remove("active");
  slider.value >= 34 && slider.value <= 38
    ? normalFace.classList.add("active")
    : normalFace.classList.remove("active");
  slider.value >= 62 && slider.value <= 66
    ? goodFace.classList.add("active")
    : goodFace.classList.remove("active");
  slider.value >= 90 && slider.value <= 94
    ? bestFace.classList.add("active")
    : bestFace.classList.remove("active");
};

// task two

let range = document.getElementById("calculatorRange");
const repairBuilding = document.getElementById("building");
const repairSecondaryHousing = document.getElementById("secondaryHousing");
const repairPrivateHouse = document.getElementById("privateHouse");
const rangeValue = document.querySelector(".calculator__inner-range-top-value");

let radioBtns = document.querySelectorAll("input[name=repair]");
let rateBtns = document.querySelectorAll("input[name=rate]");
let price = document.querySelector(".calculator__inner-range-price-span");
let rangeNum = document.querySelector("input[name=rangeNum]");

function multiply() {
  let radioBtn = document.querySelector("input[name=repair]:checked").value;
  let rateBtn = document.querySelector("input[name=rate]:checked").value;
  price.innerHTML =
    Math.round((rateBtn * range.value) / radioBtn).toLocaleString() + " руб.";
}

rangeNum.addEventListener("input", () => {
  range.value = rangeNum.value;
  multiply();
});

range.addEventListener("input", () => {
  rangeNum.value = range.value;
  multiply();
});

function calculator() {
  radioBtns.forEach((e) => {
    e.addEventListener("change", multiply);
  });
  rateBtns.forEach((t) => {
    t.addEventListener("change", multiply);
  });
}
calculator();

