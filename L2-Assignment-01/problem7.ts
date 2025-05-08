{
// 1. Define an enum Day for the days of the week.
// 2. Create a function that returns "Weekday" or "Weekend" based on the input day.
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    const weekendCondition = day === Day.Saturday || day === Day.Sunday;
    if(weekendCondition){
        return "Weekend";
    }else{
        return "Weekday";
    }
  }


getDayType(Day.Monday);
getDayType(Day.Sunday);
}