let stop = false;
let counter = 1;
function styleBorder(id, borderThickness, borderColor, borderRadius) {
  document.getElementById(`b${id}`).style.border = `${borderThickness} solid ${borderColor}`;
  document.getElementById(`b${id}`).style.borderRadius = borderRadius;
}
function setStop(value) {
  stop = value;
  console.log(stop)
  value ? {} : counter = 1
}
function highlight(id, value) {
  setStop(value);
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`b${i}`).style.border = "0px solid blue";
  }
  value ? styleBorder(id, "1px", "red", "8px") : styleBorder(id, "0px", "red", "3px")
  // document.getElementById(`b${id}`).style.border = value ? "1px solid red" : "none";
  console.log(`stop em highlight: ${stop}`)
}
function alwaysOn() {
  setInterval(function () {
    if (!stop) {
      if (counter > 1) {
        document.getElementById(`b${counter - 1}`).style.border = "0px";
      } else {
        document.getElementById(`b${4}`).style.border = "0px";
      }
      console.log(counter)
      document.getElementById(`b${counter}`).style.border = "1px solid red";
      counter++;
      if (counter === 5) {
        counter = 1;
      }
      console.log(`stop em setInterval: ${stop}`)
    }
    console.log(`stop em setInterval: ${stop}`)
  }, 1000);
}
alwaysOn()
