const input = document.querySelector("input");
const btn = document.querySelector("button")
const result = document.getElementById("result");

input.max = new Date().toISOString().split("T")[0]

btn.addEventListener("click", e=> {
    const currentDate = new Date;

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const userInput = new Date(input.value);

    const userInputDay = userInput.getDate();

    const userInputMonth = userInput.getMonth() + 1;
    const userInputFullYear = userInput.getFullYear();

    let day, month, year;

    year = currentYear - userInputFullYear;

    if(userInputMonth <= currentMonth) {
        month = currentMonth - userInputMonth;
    } else {
        month = 12 + userInputMonth - currentMonth;
        year--;
    }

    if(userInputDay <= currentDay) {
        console.log(currentDay)
        console.log(userInputDay)
        day = currentDay - userInputDay;
    } else {
        // month--;
        day = getDaysInMonth(year, month) + currentDay - userInputDay;
    }

    if(input.value == "") {
        result.innerHTML = "Error! Input your age." 
        result.style.color = "#ffff76";
    } else {
        result.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> months, <span>${day}</span> days old.` 
    }
})

function getDaysInMonth(year, month) {
    return(new Date(year, month, 0).getDate())
}
