# Managing environment variables in NodeJS

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Install
```shell
npm i dotenv
```
### Environment(.env)
```environment
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

### Using
```javascript
const db = require('db')

db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

[Managing environment variables in NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/)
[dotenv](https://www.npmjs.com/package/dotenv)
