function leapYear(year){
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        console.log('Your year is a Leap Year')
    } else {
        console.log('Your year is not a Leap Year')
    }
    return year
}
var isLeapYear = leapYear(2000)
console.log(isLeapYear)