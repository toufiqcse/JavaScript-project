// ৪ দিয়ে ভাগ করলে ভাগশেষ ০ হলে লিপ ইয়ার হবে
function leapYear (year)
{
    if ( year % 4 == 0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}
const inputYear = 2024;
const leapYearIs = leapYear( inputYear );
console.log("Year is Leap Year:",leapYearIs);