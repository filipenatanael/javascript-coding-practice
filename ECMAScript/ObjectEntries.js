// Object.entries() return [key, value]

const countries = {
  Brazil: 1,
  Uruguay: 2,
  Germany: 3
}

const countriesMap = new Map(Object.entries(countries));

console.log(countriesMap.size);
console.log(countriesMap.has('Uruguay'));
console.log(countriesMap.get('Brazil'));

// Using Object.keys(obj) return [key] only!
console.log(Object.keys(countriesMap));
