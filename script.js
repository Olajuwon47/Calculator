/*const inputValue = document.getElementById("user-input");
const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.innerText === "NaN") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerHTML.trim();
    });
  });
  
  const calculate = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
    });
  });

  let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

if (!isNaN(lastValue) && e.target.innerHTML === "=") {
    inputValue.innerText = eval(inputValue.innerText);
} else if (e.target.innerHTML === "AC") {
    inputValue.innerText = 0;
} else if (e.target.innerHTML === "DEL") {
    inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length - 1);
    if (inputValue.innerText.length == 0) {
        inputValue.innerText = 0;
    }
} else {
    if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
    }
}*/
const inputValue = document.getElementById("user-input");

document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastValue = inputValue.innerText.slice(-1);

    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = "0";
    } else if (e.target.innerHTML === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
/*document.querySelectorAll(".number").forEach(function (item) {
    item.addEventListener("click", function (e) {
      const inputValue = document.getElementById("user-input");
      const lastValue = inputValue.innerText.substring(
        inputValue.innerText.length - 1
      );
  
      if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
  
      if (!isNaN(lastValue) || e.target.innerHTML === ".") {
        inputValue.innerText += e.target.innerHTML.trim();
      }
    });
  });
  
  document.querySelectorAll(".operator").forEach(function (item) {
    item.addEventListener("click", function (e) {
      const inputValue = document.getElementById("user-input");

      if (e.target.innerHTML === "=") {
        inputValue.innerText = eval(inputValue.innerText);
      } else if (e.target.innerHTML === "AC") {
        inputValue.innerText = "0";
      }else if (e.target.innerHTML === "%") {
            inputValue.innerText = "";
      } else if (e.target.innerHTML === "DEL") {
        inputValue.innerText = inputValue.innerText.substring(
          0,
          inputValue.innerText.length - 1
        );
        if (inputValue.innerText.length == 0) {
          inputValue.innerText = "0";
        }
      }
    });
  });*/