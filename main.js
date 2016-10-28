$(document).ready(function(){
    function displayDate() {
        var currentDate = new Date();
        var month = currentDate.getMonth();
            if (month === 0) {
                month = "January"
            }
            if (month === 1) {
                month = "February"
            }
            if (month === 2) {
                month = "March"
            }
            if (month === 3) {
                month = "April"
            }
            if (month === 4) {
                month = "May"
            }
            if (month === 5) {
                month = "June"
            }
            if (month === 6) {
                month = "July"
            }
            if (month === 7) {
                month = "August"
            }
            if (month === 8) {
                month = "September"
            }
            if (month === 9) {
                month = "October"
            }
            if (month === 10) {
                month = "November"
            }
            if (month === 11) {
                month = "December"
            }
        var day = currentDate.getDate();
        var year = currentDate.getFullYear();
        var dateDiv = document.getElementById('date');
        dateDiv.innerText = month + " " + day + ","  + year
    }
    displayDate();
    
    
    
    function displayDay(){
        var currentDay = new Date();
        var day = currentDay.getDay();
            if (day === 1) {
                day = "Monday"
            }
            if (day === 2) {
                day = "Tuesday"
            }
            if (day === 3) {
                day = "Wednesday"
            }
            if (day === 4) {
                day = "Thursday"
            }
            if (day === 5) {
                day = "Friday"
            }
            if (day === 6) {
                day = "Saturday "
            }
            if (day === 7) {
                day = "Sunday "
            }
        var dayDiv = document.getElementById('day');
        dayDiv.innerText = day;   
    }
    displayDay();
    
    function displayTime(){
        var currentTime = new Date();
        var hours = currentTime.getHours();
            if (hours < 10) {
                hours = "0" + hours
            }
        var minutes = currentTime.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
        var seconds = currentTime.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
        var meridiem = "AM";
            if (hours > 12) {
                hours = hours - 12;
                meridiem = "PM"
            }
            if (hours === 0) {
                hours = 12;
            }
        var clockDiv = document.getElementById('clock');
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        setInterval(displayTime, 1000);
    }
    displayTime();
    
});