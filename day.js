// in index.html, src (source) attribute points to file containing the definition

function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
  }

// Returns a greeting for the given date.
function greeting(date) {
   return `Hola Phoenicians, Happy ${dayName(date)}!`
  //  alert(`Hello, Phoenicians! Happy ${dayName(now)}.`);
}
