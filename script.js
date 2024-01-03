const numPad = document.querySelectorAll(".numpad");
const display = document.querySelector(".input_display");
const equal = document.querySelector(".equal");
const sub = document.querySelector(".sub");

for (let i = 0; i < numPad.length; i++) {
  numPad[i].addEventListener("click", function () {
    let np = numPad[i].textContent;
    switch (np) {
      case "AC":
        display.value = "";
        sub.textContent = "";
        break;
      case "DE":
        display.value = display.value.toString().slice(0, -1);
        break;
      default:
        display.value += np;
        break;
    }
  });
}

equal.addEventListener("click", function () {
  const a = display.value + " =";
  try {
    const b = eval(display.value);

    if (b.toString().length > 10) {
      display.value = b.toFixed(8);
    } else display.value = b;

    sub.textContent = a;
  } catch (err) {
    alert("Should not be anything invalid or empty!!!");
    display.value = "";
  }
});
