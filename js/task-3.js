const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  let girilenIsim = input.value.trim();

  if (girilenIsim === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = girilenIsim;
  }
});
