let name = "Hassan", age = 21;

function changeGreeting() {
  document.getElementById("greeting").innerText = 
    age >= 18 ? "Welcome, " + name + "!" : "You must be 18+.";

  for (let i = 1; i <= 3; i++) console.log("Click " + i);


