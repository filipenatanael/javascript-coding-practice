# nodejs-babel-es6-async-await

Configuring the node to use new JavaScript functionality.

- async/await
- generate functions
- import/export
- etc...

### Dependencies
- babel-cli
- babel-preset-env

```bash
npm install babel-cli babel-preset-env --dev
npm install rimraf --dev # The UNIX command rm -rf for node.
```

### Babel Node

babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.

- You should not be using babel-node in production. It is unnecessarily heavy, with high memory usage due to the cache being stored in memory. You will also always experience a startup performance penalty as the entire app needs to be compiled on the fly.

- Due to technical limitations ES6-style module-loading is not fully supported in a babel-node REPL.

```json
  "scripts": {
    "dev": "nodemon -w src --exec \"babel-node src --presets env\"",
    "build": "babel src -s -D -d dist --presets env",
    "start": "node dist"
  },
```


[@babel/node](https://babeljs.io/docs/en/babel-node)
[Rimraf](https://www.npmjs.com/package/rimraf)
