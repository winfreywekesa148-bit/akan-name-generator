const yearInput = document.getElementById("year");
const MonthSelect = document.getElementById("Month");
const DateSelect = document.getElementById("Date");
const GenderSelect = document.getElementById("Gender");
const resultBox = document.getElementById("result-box");
const akanName = document.getElementById("akan-name");

  // Validation
  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1–31).");
    return;
  }

  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1–12).");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  const day =
    Math.floor(
      ((4 * CC - 2 * CC - 1) +
        (5 * YY) +
        Math.floor((26 * (MM + 1)) / 10) +
        DD) % 7
    );

  const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku",
    "Yaw", "Kofi", "Kwame"
  ];

  const femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua",
    "Yaa", "Afua", "Ama"
  ];

  const akanName =
    gender.value === "male"
      ? maleNames[day]
      : femaleNames[day];

  document.getElementById("akan-name").textContent =
    `Your Akan name is ${akanName}`;


