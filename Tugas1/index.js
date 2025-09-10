function convertNumber() {
  let decimal = document.getElementById("decimalInput").value;

  if (decimal === "") {
    alert("Please enter a number first!");
    return;
  }

  let dec = parseInt(decimal);

  if (dec < 0) {
    alert("Please enter a non-negative number!");
    return;
  }

  document.getElementById("binary").textContent = dec.toString(2);
  document.getElementById("octal").textContent = dec.toString(8);
  document.getElementById("hexa").textContent = dec.toString(16).toUpperCase();
}
