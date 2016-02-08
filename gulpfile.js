var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
var rename = require("gulp-rename");
 
gulp.task("resize-large", function () {
  gulp.src("images_src/*.{jpg,png}")
    .pipe(imageResize({ width : 1280 }))
    //.pipe(rename(function (path) { path.basename += "-large"; }))
    .pipe(gulp.dest("images/large"));
});

gulp.task("resize-medium", function () {
  gulp.src("images_src/*.{jpg,png}")
    .pipe(imageResize({ width : 640 }))
    //.pipe(rename(function (path) { path.basename += "-medium"; }))
    .pipe(gulp.dest("images/medium"));
});

gulp.task("resize-small", function () {
  gulp.src("images_src/*.{jpg,png}")
    .pipe(imageResize({ width : 320 }))
    //.pipe(rename(function (path) { path.basename += "-small"; }))
    .pipe(gulp.dest("images/small"));
});

gulp.task("resize", ['resize-large', 'resize-medium', 'resize-small']); 



