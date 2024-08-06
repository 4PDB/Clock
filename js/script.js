function displayInfo() {
    const tm = new Date();
    let hour = tm.getHours();
    let minute = tm.getMinutes();
    let second = tm.getSeconds();
    const time = hour + ":" + minute + ":" + second;

    hour = twoNumbers(hour);
    minute = twoNumbers(minute);
    second = twoNumbers(second);

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;

    const dt = new Date();
    let day = dt.getDay();
    let month = dt.getMonth();
    let year = dt.getFullYear();

    day = twoNumbers(day);
    month = twoNumbers(month);
    year = twoNumbers(year);

    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
}

function twoNumbers(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

setInterval(displayInfo, 1000);
console.log("Hola Mundo");