// Async Await Example
// Simplified code with less chaining and facility to debug

async function getMyIp() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();

  data.map(post => {
    console.log(post.title);
  });

}

// ECMAScript 6
//
// function getMyIp() {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(data => data.json())
//   .then(data => data.map(post => {
//     console.log(post.title);
//   }));
// }

getMyIp();
