// Object.entries() return [key, value]

const countries = {
  Brazil: 1,
  Uruguay: 2,
  Germany: 3
}

console.log(Object.values(countries).reduce((total, amount) => total + amount));
