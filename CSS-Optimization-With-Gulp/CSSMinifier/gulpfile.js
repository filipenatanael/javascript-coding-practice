const Gulp = require("gulp");
const GulpMinifyCss = require("gulp-minify-css");

const CSS_DIRECTORY = "assets/css/**/*.css";
const DIST_CSS = "public/assets/css"

Gulp.task("default", function() {
  console.log("This is a default task!");
});

Gulp.task("minifyCss", function() {
  Gulp.src(CSS_DIRECTORY).pipe(GulpMinifyCss()).pipe(Gulp.dest(DIST_CSS));
});

Gulp.task("monitoringChanges", function() {
  Gulp.watch(CSS_DIRECTORY, ["minifyCss"]);
});
