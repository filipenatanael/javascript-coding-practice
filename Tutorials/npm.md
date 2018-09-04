## How do I update each dependency in package.json to the latest version?

- npm i -g npm-check-updates
- ncu -u
- npm install


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
