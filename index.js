let stop = false;
let counter = 1;
const borderColor = "red";
const borderRadius = "8px";
function styleBorder(id, borderThickness) {
  document.getElementById(`image${id}`).style.border = `${borderThickness} solid ${borderColor}`;
  document.getElementById(`image${id}`).style.borderRadius = borderRadius;
}
function setStop(value) {
  stop = value;
  value ? {} : counter = 1
}
function highlight(id, value) {
  setStop(value);
  for (let i = 1; i <= 4; i++) {
    styleBorder(i, '0px');
  }
  value ? styleBorder(id, '1px') : styleBorder(id, "0px")
}
function alwaysOn() {
  setInterval(function () {
    if (!stop) {
      if (counter > 1) {
        styleBorder(counter - 1, '0px');
      } else {
        styleBorder(4, '0px');
      }
      styleBorder(counter, "1px");
      counter++;
      if (counter === 5) {
        counter = 1;
      }
    }
  }, 1000);
}
alwaysOn()
