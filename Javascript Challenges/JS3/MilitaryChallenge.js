// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
// Input Format
// A single string containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
// Output Format
// Convert and print the given time in 24-hour format.
// Sample Input
// 07:05:45PM
// Sample Output
// 19:05:45
// Do error messages for incorrect inputs

var givenTime = prompt('Type in a time in this format. 00:00:00AM');


function hour(givenTime) {
    if (givenTime.includes ('AM') || givenTime.includes('PM')) {
        var splitTime = givenTime.split(':');
        var hr = splitTime[0];
        var min = splitTime[1];
        var sec = splitTime[2];

        if (sec.includes('PM')) {
            hr = parseInt(hr) + 12;
            sec = sec.replace('PM', '');
        } else {
            sec = sec.replace('AM', '');
        }
        console.log(`${hr}:${min}:${sec}`);

    } else {
        console.log("Input was not recieved due to incorrect format.")
    }
}

hour(givenTime);