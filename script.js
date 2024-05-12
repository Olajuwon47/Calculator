document.addEventListener("DOMContentLoaded", function() {
const inputValue = document.getElementById("user-input");
document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});
document.querySelectorAll(".zero").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});
document.querySelectorAll(".switch").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});
document.querySelectorAll(".Delete").forEach(function (item) {
  item.addEventListener("click", function (e) {
    inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
  });
});
document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastValue = inputValue.innerText.slice(-1);

    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = "0";
    } else if (e.target.innerHTML === "Del") {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
});
