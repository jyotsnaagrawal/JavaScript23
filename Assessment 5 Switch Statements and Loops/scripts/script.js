// Define an array with holidays for each month
const holidaysByMonth = {
    January: ["New Year's Day", "Martin Luther King Jr. Day"],
    February: ["Presidents' Day", "Valentine's Day"],
    March: ["St. Patrick's Day", "International Women's Day"],
    April: ["April Fools' Day", "Earth Day"],
    May: ["May Day"],
    June: ["Father's Day", "World Environment Day"],
    July: ["Independence Day", "World Population Day"],
    August: ["International Youth Day", "World Humanitarian Day"],
    September: ["Labor Day", "International Day of Peace"],
    October: ["Halloween"],
    November: ["Thanksgiving ", "Veterans Day"],
    December: ["Christmas Day", "New Year's Eve"],
};

// Function to display holidays for a given month
function displayHolidays(month) {
    const holidayList = document.getElementById("holidayList");
    
    const listItem = document.createElement("li");
    listItem.textContent = month + ":";
    holidayList.appendChild(listItem);

    holidaysByMonth[month].forEach(holiday => {
        const holidayItem = document.createElement("li");
        holidayItem.textContent = holiday;
        holidayList.appendChild(holidayItem);
    });
}

// Call the displayHolidays function for each month
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

months.forEach(month => {
    displayHolidays(month);
});
