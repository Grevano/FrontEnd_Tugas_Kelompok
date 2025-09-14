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

  document.getElementById("binary").textContent = toBinary(dec);
  document.getElementById("octal").textContent = toOctal(dec);
  document.getElementById("hexa").textContent = toHexa(dec);
}

function toBinary(num) {
  if (num === 0) return "0";
  let result = "";
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

function toOctal(num) {
  if (num === 0) return "0";
  let result = "";
  while (num > 0) {
    result = (num % 8) + result;
    num = Math.floor(num / 8);
  }
  return result;
}

function toHexa(num) {
  if (num === 0) return "0";
  const hexChars = "0123456789ABCDEF";
  let result = "";
  while (num > 0) {
    result = hexChars[num % 16] + result;
    num = Math.floor(num / 16);
  }
  return result;
}
