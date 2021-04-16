let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} ${hours}:${minutes}`;

// City Search
function citySearch(event) {
  event.preventDefault();
  let location = document.querySelector(".search-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${location.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);
