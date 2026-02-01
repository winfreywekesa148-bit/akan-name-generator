const yearInput = document.getElementById("year");
const MonthSelect = document.getElementById("Month");
const DateSelect = document.getElementById("Date");
const GenderSelect = document.getElementById("Gender");
const resultBox = document.getElementById("result-box");
const akanName = document.getElementById("akan-name");

populateSelect(daySelect, 1, 31);
populateSelect(monthSelect, 1, 12);
populateSelect(yearSelect, 1900, 2025); 

function calculateName(){
    const year = yearInput.value;
    const Month = MonthSelect.value;
    const Date = DateSelect.value;
    const Gender = GenderSelect.value;

    

}

