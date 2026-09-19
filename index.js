let getDate = new Date();

let curDate = getDate.getDate();
let curMonth = getDate.getMonth() + 1;
let curYear = getDate.getFullYear();


function get() {

    let dat = document.getElementById("dates").value;

    // Check date selected or not
    if (dat === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let year = parseInt(dat.substring(0, 4));
    let month = parseInt(dat.substring(5, 7));
    let date = parseInt(dat.substring(8, 10));


    // Calculate age
    let ageYear = curYear - year;
    let ageMonth = curMonth - month;
    let ageDate = curDate - date;


    // Date negative hone par
    if (ageDate < 0) {
        ageMonth--;

        let previousMonthDays =
            new Date(curYear, curMonth - 1, 0).getDate();

        ageDate += previousMonthDays;
    }


    // Month negative hone par
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }


    // Total months
    let totalMonths = ageYear * 12 + ageMonth;


    console.log("Age in Years : " + ageYear);
    console.log("Age in Months : " + totalMonths);
    console.log("Remaining Days : " + ageDate);


    // Display result
    document.getElementById("result").innerHTML =
        "Your Age is: " +
        ageYear + " Years " +
        ageMonth + " Months " +
        ageDate + " Days";
}