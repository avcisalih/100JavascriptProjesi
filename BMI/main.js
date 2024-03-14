const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || isNaN(height)) {
    results.innerHTML = "Lütfen Geçerli Bir Boy Giriniz...";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Lütfen Geçerli Bir Kilo Giriniz...";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<br> <span>${bmi}</span>`;
  }
});
