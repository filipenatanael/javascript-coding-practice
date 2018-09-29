/*
<button type="button" id="btn" name="button">click on it</button>

let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  console.log('Hello World!');
});

*/

// Custom event and dispatch event JavaScript
addEventListener("eventName", function() {
  console.log('This event was dispatched!');
});

let event = new Event("eventName", {bubbles: true});

document.dispatchEvent(event);
