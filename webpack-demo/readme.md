# Getting Started

- mkdir webpack-demo && cd webpack-demo
- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save lodash

- npm install -g npx
- npx webpack

- npx webpack --config webpack.config.js

## Adding the follow line in your packege.json.

- "build": "webpack"

##  Now the npm run build command can be used in place of the npx command.

- npm run build

## Source Map

```.json
module.exports = {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
          comments: false
        },
        sourceMap: true
      })
    ]
  }
};
```
