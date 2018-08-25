const Gulp = require("gulp");
const GulpMinifyCss = require("gulp-minify-css");

Gulp.task("default", function() {
  console.log("This is a default task!");
});

Gulp.task("minifyCss", function() {
  console.log("This a minifyCss task!");
})
