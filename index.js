window.onload = function () {
  var numOutput = document.getElementById("output");
  var count = "";
  var res = [];

  function renderOutput() {
    if (count === "") {
      numOutput.value = "0";
    } else {
      numOutput.value = count;
    }
  }

  var grayBtn = document.getElementsByClassName("grayButton");

  for (let i = 0; i < grayBtn.length; i++) {
    grayBtn[i].addEventListener("click", function () {
      /*if ((numOutput.value = "" && grayBtn[i].value === ".")) {
        count = "0.";
      } else {
        if (!isNaN(grayBtn[i].value) || grayBtn[i].value === ".") {
          if (numOutput.value.indexOf(".") != -1) {
            if (grayBtn[i].value != "." && grayBtn[i].value != "0") {
              count += grayBtn[i].value;
            } else {
              return count;
            }
          }
        }
        count += grayBtn[i].value;
      }
      */

      if (grayBtn[i].value === ".") {
        if (numOutput.value === "0") {
          count = "0.";
        } else if (numOutput.value.indexOf(".") !== -1) {
          return count;
        } else {
          count += grayBtn[i].value;
        }
      } else if (grayBtn[i].value === "0") {
        if (numOutput.value === "0") {
          numOutput.value = "";
        } else {
          count += grayBtn[i].value;
        }
      } else {
        count += grayBtn[i].value;
      }
      //res[res.length] = count;
      renderOutput();
    });
  }

  /*
if (grayBtn[i].value === ".") {
if ((numOutput.value = "")) {
  count = "0.";
} else if (numOutput.value.indexOf(".") !== -1) {
  return count;
}
} else if ((grayBtn[i].value = "0")) {
if (numOutput.value.length === 0) {
  numOutput.value = "";
} else {
  count += grayBtn[i].value;
}
} else{
count+=grayBtn[i].value;
}
*/

  var darkBtn = document.getElementsByClassName("darkGrayButton");
  for (let i = 0; i < darkBtn.length; i++) {
    darkBtn[i].addEventListener("click", function () {
      if (darkBtn[i].value === "AC") {
        count = "";
        res = [];
      } else if (darkBtn[i].value === "+/-") {
        count = count * -1;
      } else if (darkBtn[i].value === "%") {
        count = count / 100;
      }
      renderOutput();
    });
  }

  var orangeBtn = document.getElementsByClassName("orangeButton");
  for (let i = 0; i < orangeBtn.length; i++) {
    orangeBtn[i].addEventListener("click", function () {
      if (orangeBtn[i].value !== "=") {
        res[res.length] = numOutput.value;
        if (orangeBtn[i].value === "÷") {
          res[res.length] = "/";
        } else if (orangeBtn[i].value === "×") {
          res[res.length] = "*";
        } else {
          res[res.length] = orangeBtn[i].value;
        }
      } else {
        res[res.length] = numOutput.value;
        console.log(res);
        count = eval(res.join(""));
        res = [];
        numOutput.value = "";
      }
      renderOutput();
      count = "";
    });
  }
};
