const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const deg = 45;
let num = 0;
var i = 0;

btnLeft.addEventListener("click", () => {
  e.preventDefault();
  num--;
  wrap.style.transform = "rotate(${num*deg}deg)";
});

btnRight.addEventListener("click", () => {
  e.preventDefault();
  num++;
  wrap.style.transform = "rotate(${num*deg}deg)";
});

wrap.addEventListener("click", () => {
  i++;
  if (i % 2 == 1) {
    box.style.backgroundColor = "hotpink";
  } else {
    box.style.backgroundColor = "aqua";
  }
});
