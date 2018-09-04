## How do I update each dependency in package.json to the latest version?

**npm-check-updates** is a utility that automatically adjusts a package.json with the latest version of all dependencies:

- npm i -g npm-check-updates
- ncu -u
- npm install

Simply change every dependency's version to *, then **run npm update --save**

**Before:**
```
"dependencies": {
    "express": "*",
    "mongodb": "*",
    "underscore": "*",
    "rjs": "*",
    "jade": "*",
    "async": "*"
  }
```

**After:**
```
"dependencies": {
  "express": "~3.2.0",
  "mongodb": "~1.2.14",
  "underscore": "~1.4.4",
  "rjs": "~2.10.0",
  "jade": "~0.29.0",
  "async": "~0.2.7"
}
```

To see which modules are outdated, just run npm outdated. It will list any installed dependencies that have newer versions available.

## References
(How do I update each dependency in package.json to the latest version?)[https://stackoverflow.com/questions/16073603/how-do-i-update-each-dependency-in-package-json-to-the-latest-version]
