//Clear the display
let display = document.getElementById("display");
let ClearDisplay = document.getElementById("ClearDisplay");
let clearLastNumber = document.getElementById("clearLastNumber");

ClearDisplay.addEventListener("click", () => (display.value = ""));

clearLastNumber.addEventListener(
  "click",
  () => (display.value = display.value.slice(0, -1))
);

// Nuumbers
let numberZero = document.getElementById("numberZero");
let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let numberThree = document.getElementById("numberThree");
let numberFour = document.getElementById("numberFour");
let numberFive = document.getElementById("numberFive");
let numberSix = document.getElementById("numberSix");
let numberSeven = document.getElementById("numberSeven");
let numberEight = document.getElementById("numberEight");
let numberNine = document.getElementById("numberNine");

numberZero.addEventListener(
  "click",
  () => (display.value += numberZero.innerHTML)
);

numberOne.addEventListener(
  "click",
  () => (display.value += numberOne.innerHTML)
);

numberTwo.addEventListener(
  "click",
  () => (display.value += numberTwo.innerHTML)
);

numberThree.addEventListener(
  "click",
  () => (display.value += numberThree.innerHTML)
);

numberFour.addEventListener(
  "click",
  () => (display.value += numberFour.innerHTML)
);

numberFive.addEventListener(
  "click",
  () => (display.value += numberFive.innerHTML)
);

numberSix.addEventListener(
  "click",
  () => (display.value += numberSix.innerHTML)
);

numberSeven.addEventListener(
  "click",
  () => (display.value += numberSeven.innerHTML)
);

numberEight.addEventListener(
  "click",
  () => (display.value += numberEight.innerHTML)
);

numberNine.addEventListener(
  "click",
  () => (display.value += numberNine.innerHTML)
);

// Calculations
let division = document.getElementById("division");
let multiply = document.getElementById("multiply");
let plus = document.getElementById("plus");
let negative = document.getElementById("negative");
let Point = document.getElementById("Point");
let sum = document.getElementById("sum");
let percent = document.getElementById("percent");

percent.addEventListener("click", () => (display.value /= 100));
division.addEventListener("click", () => (display.value += division.innerHTML));

multiply.addEventListener("click", () => (display.value += multiply.innerHTML));

plus.addEventListener("click", () => (display.value += plus.innerHTML));

negative.addEventListener("click", () => (display.value += negative.innerHTML));

Point.addEventListener("click", () => (display.value += Point.innerHTML));

sum.addEventListener("click", () => (display.value = eval(display.value)));
