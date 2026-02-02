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

    const mm = 2.6 * (Month + 1)
    const yy = 1.25*year 
    const cc = (0.25*year - 2) * (year - 1)
    const name = ((mm + yy + cc + date) mod 7)

    if (male === Sunday){
        console.log("Kwasi");
    }else if(male === Monday){
        console.log("Kwadwo");
    }else if(male === Tuesday){
        console.log("Kwabena");
    }else if(male === Wednesday){
        console.log("Kwaku");
    }else if(male === Thursday){
        console.log("Yaw");
    }else if(male === Friday){
        console.log("Kofi");
    }else if(male === Saturday){
        console.log("Kwame");
    }else if (female === Sunday){
        console.log("Akosua");
    }else if(female === Monday){
        console.log("Adwoa");
    }else if(female === Tuesday){
        console.log("Abenaa");
    }else if(female === Wednesday){
        console.log("Akua");
    }else if(female === Thursday){
        console.log("Yaa");
    }else if(female === Friday){
        console.log("Afua");
    }else (female === Saturday){
        console.log("Ama");
    }

}
