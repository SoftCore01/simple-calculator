let bodyBackgroundClasses = ["bg-thm-1", "bg-thm-2", "bg-thm-3"];
let headerTextClasses = ["hd-thm-1", "hd-thm-2", "hd-thm-3"];
let keyClasses = ["key-thm-1", "key-thm-2", "key-thm-3"];
let keyAreaClasses = ["k-thm-1", "k-thm-2", "k-thm-3"];
let eqClasses = ["eq1", "eq2", "eq3"];
let dClasses = ["d1", "d2", "d3"];



let body = document.querySelector("body");
let equalElement = document.querySelector(".equal");
let delResetButtons = document.querySelectorAll(".d1");
let buttons = document.getElementsByClassName("button");
let keyBgElements = document.querySelectorAll(".k-thm-1");
let keyElements = document.querySelectorAll(".key-thm-1");
let headerElements = document.querySelectorAll(".hd-thm-1");
let arr = [...buttons];


arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    
    if (element.classList.contains("eq2")) {
      changeColor(eqClasses[1], equalElement);
      changeBgColor(bodyBackgroundClasses[1], body);

      headerElements.forEach( (el) => {
        changeColor(headerTextClasses[1], el)
      });

      keyBgElements.forEach( (el) => {
        changeColor(keyAreaClasses[1], el)
      })

      keyElements.forEach( (el) => {
        changeColor(keyClasses[1], el)
      })

      delResetButtons.forEach( (el) => {
        changeColor(dClasses[1], el)
      })

    } else if (element.classList.contains("eq3")) {
      changeColor(eqClasses[2], equalElement);
      changeBgColor(bodyBackgroundClasses[2], body);

      headerElements.forEach((el) => {
        changeColor(headerTextClasses[2], el);
      });

      keyBgElements.forEach((el) => {
        changeColor(keyAreaClasses[2], el);
      });

      keyElements.forEach((el) => {
        changeColor(keyClasses[2], el);
      });

      delResetButtons.forEach((el) => {
        changeColor(dClasses[2], el);
      });

    } else {
      changeColor(eqClasses[0], equalElement);
      changeBgColor(bodyBackgroundClasses[0], body);

      headerElements.forEach((el) => {
        changeColor(headerTextClasses[0], el);
      });

      keyBgElements.forEach((el) => {
        changeColor(keyAreaClasses[0], el);
      });

      keyElements.forEach((el) => {
        changeColor(keyClasses[0], el);
      });

      delResetButtons.forEach((el) => {
        changeColor(dClasses[0], el);
      });
    }

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});


function changeBgColor(bgAdd, el) {
  el.classList = []
  el.classList.add(bgAdd);
}

function changeColor(colorAdd, el) {
  el.classList.remove(el.classList.item(el.classList.length - 1)) 
  el.classList.add(colorAdd)
}

let numbers = document.querySelectorAll(".number");
let calcScreen = document.querySelector("#calc-screen");
let deleteButton = document.querySelector(".del");
let resetButton = document.querySelector(".reset");


numbers.forEach( (number) => {
  number.addEventListener("click", () => {
    calcScreen.value += number.value;
  })
})

deleteButton.addEventListener("click", () => {
  let calString = calcScreen.value.split("");
  calString.pop();
  calcScreen.value = calString.join("");
})

resetButton.addEventListener("click", () => {
  calcScreen.value = "";
})

window.addEventListener("keydown", (e) => {
  if (e.code == "Escape" || e.code == "Delete") {
    calcScreen.value = "";
  } else if (e.code == "") {}
})