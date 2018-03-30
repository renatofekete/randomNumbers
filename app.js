let mainNumbers = [];
let secondaryNumbers = [];
let mainNumList = document.querySelector("#mainNums");
let secondaryNumList = document.querySelector("#secondaryNums");
let btn = document.querySelector("#randomize");



function mainNumPush() {
  for (i = 1; i <= 50; i++) {
    mainNumbers.push(i);
  }
}
mainNumPush();

function secondaryNumPush() {
  for (i = 1; i <= 10; i++) {
    secondaryNumbers.push(i);
  }
}
secondaryNumPush();

function printNums() {
  mainNumList.innerHTML = '';
  secondaryNumList.innerHTML = '';
  for (i = 1; i < 6; i++) {
    let random = Math.floor(Math.random() * (mainNumbers.length + 1));
    if (mainNumbers[random] == null) {
      while (mainNumbers[random] == null) {
        random = Math.floor(Math.random() * (mainNumbers.length + 1));
      }
      mainNumList.innerHTML += `<li>${mainNumbers[random]}</li>`;
      mainNumbers.splice(random, 1);
    } else {
      mainNumList.innerHTML += `<li>${mainNumbers[random]}</li>`;
      mainNumbers.splice(random, 1);
    }

  }
  for (j = 1; j < 3; j++) {
    let random = Math.floor(Math.random() * (secondaryNumbers.length + 1));
    if (secondaryNumbers[random] == null) {
      while (secondaryNumbers[random] == null) {
        random = Math.floor(Math.random() * (secondaryNumbers.length + 1));
      }
      secondaryNumList.innerHTML += `<li>${secondaryNumbers[random]}</li>`;
      secondaryNumbers.splice(random, 1);
    } else {
      secondaryNumList.innerHTML += `<li>${secondaryNumbers[random]}</li>`;
      secondaryNumbers.splice(random, 1);
    }
  }
  mainNumbers = [];
  secondaryNumbers = [];
  mainNumPush();
  secondaryNumPush();
}
printNums();

btn.addEventListener("click", printNums);