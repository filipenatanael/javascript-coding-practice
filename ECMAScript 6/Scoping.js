/* Reviewing the study - Block-Scoped Variables */
for (let i = 0; i < 10; i++)
{
  console.log(i);
}
/*
console.log(i);
Return error! because the variable (i) it's ouside of scope.
*/


/* Block-Scoped Functions with Arrow Functions */
{
  const Hello = () => { return 'Hello Everyone!'; }
  console.log(Hello());
    {
      const Hello = () => { return 'Hello There!'; }
    }
  console.log(Hello());
}
/*
console.log(Hello());
Return error! because the function it's ouside of scope.
*/


/* Block-Scoped Functions with wirte default function */
{
  function Hello(){ return 0 }
  Hello()
    {
    function Hello(){ return 1 }
    }
  Hello()
}
