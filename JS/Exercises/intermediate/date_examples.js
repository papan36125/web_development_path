var then = new Date(2010, 0, 1);  // The 1st day of the 1st month of 2010
var later = new Date(2010, 0, 1,  // Same day, at 5:10:30pm, local time
                     17, 10, 30);
var now = new Date();          // The current date and time
var elapsed = now - then;      // Date subtraction: interval in milliseconds
console.log(later.getFullYear());            // => 2010
console.log(later.getMonth());               // => 0: zero-based months
console.log(later.getDate());                // => 1: one-based days
console.log(later.getDay());                 // => 5: day of week.  0 is Sunday 5 is Friday.
console.log(later.getHours());               // => 17: 5pm, local time
console.log(later.getUTCHours());            // hours in UTC time

console.log(later.toString());               // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
console.log(later.toUTCString());            // => "Sat, 02 Jan 2010 01:10:30 GMT"
console.log(later.toLocaleDateString());     // => "01/01/2010"
console.log(later.toLocaleTimeString());     // => "05:10:30 PM"
console.log(later.toISOString());            // => "2010-01-02T01:10:30.000Z"; ES5 only
console.log(now.toString());
console.log(elapsed);  
