// date counting from
var countDownDate = new Date("Oct 1, 2030 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));

  //console.log(distance);

  // in order to have a stable, centered position, a zero must be inserted before single digit numbers

  var secv;
  var minv;

  if (minutes < 10) {
    minv = "0";
  } else {
    minv = "";
  }

  if (seconds < 10) {
    secv = "0";
  } else {
    secv = "";
  }


  // selects ellemens that count and inserts the remaining time

  document.getElementById("year").innerHTML = years;
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minv + minutes;
  document.getElementById("second").innerHTML = secv + seconds;

  // finished text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("count").innerHTML = "We will survive together";
}
}, 1000);
