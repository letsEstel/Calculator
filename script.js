const div = document.querySelector("div");
const display = document.createElement("div");

const add = (a, b) => (a * 10 + b * 10) / 10;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b == 0) {
    return "error";
  } else return a / b;
};

const operate = (a, b, op) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return minus(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

display.setAttribute(
  "style",
  "display:flex; align-items:center;border-radius: 17px; box-sizing:border-box; height:72px;padding:17px; border:solid  2px; font-size:21px;"
);
div.appendChild(display);

const createBtn = (btnName) => {
  var btn = document.createElement("button");
  btn.textContent = `${btnName}`;
  btn.setAttribute("id", `${btnName}`);
  btn.setAttribute(
    "style",
    "height:72px;width:72px; margin:2px;border-radius: 17px; "
  );
  div.appendChild(btn);
};

for (let i = 1; i <= 9; i++) {
  createBtn(`${i}`);
}
createBtn("0");
createBtn(".");
createBtn("clear");
createBtn("=");
createBtn("+");
createBtn("-");
createBtn("*");
createBtn("/");
div.setAttribute("style", "flex-wrap:wrap;");

let a;
let b;
let op;
let operand = "";

const btnFunc = (event) => {
  let btnId = event.target.id;
  console.log(typeof btnId);
  //btn for each input
  if (btnId == "clear") {
    a = undefined;
    b = undefined;
    op = undefined;
    operand = "";
  } else if (btnId == ".") {
    if (operand.includes("."));
    else {
      operand = operand.concat(".");
    }
  } else if (btnId == "=") {
    if (op && a && b) {
      operand = operate(a, b, op);
      op = undefined;
      b = undefined;
    }
  } else if (btnId == "+" || btnId == "-" || btnId == "*" || btnId == "/") {
    if (a) {
      op = btnId;
      operand = "";
    }
  } else {
    operand = operand.concat(btnId);
  }
  //save number logic
  if (op) {
    b = operand;
  } else a = operand;

  //display
  display.textContent = operand;
};

let btns = [...document.querySelectorAll("button")];
btns.map((btn) => btn.addEventListener("click", btnFunc));
