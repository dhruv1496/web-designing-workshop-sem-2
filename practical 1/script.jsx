function table() {
  let n = document.getElementById("num").value;
  let r = "";

  for (let i = 1; i <= 10; i++) {
    r += n + " x " + i + " = " + (n * i) + "<br>";
  }

  document.getElementById("res").innerHTML = r;
}