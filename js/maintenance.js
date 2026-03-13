// const launchDate = new Date("2026-03-26T15:00:00").getTime();

// const lastValues = {
//   days: null,
//   hours: null,
//   minutes: null,
//   seconds: null
// };

// function updateUnit(id, value) {
//   const el = document.getElementById(id);

//   if (lastValues[id] === value) return;

//   el.classList.add("flip");

//   setTimeout(() => {
//     el.textContent = value;
//     el.classList.remove("flip");
//   }, 220);

//   lastValues[id] = value;
// }

// setInterval(() => {
//   const now = Date.now();
//   const diff = launchDate - now;
//   if (diff <= 0) return;

//   updateUnit("days", String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"));
//   updateUnit("hours", String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"));
//   updateUnit("minutes", String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"));
//   updateUnit("seconds", String(Math.floor((diff / 1000) % 60)).padStart(2, "0"));
// }, 1000);
