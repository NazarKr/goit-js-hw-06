const inputRangeEL = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

const changeFontSize = (even) => {
  spanTextEl.style.fontSize = even.currentTarget.value + "px";
};

inputRangeEL.addEventListener("input", changeFontSize);
