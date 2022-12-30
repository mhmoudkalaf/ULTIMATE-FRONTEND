const { src, dest, watch } = require("gulp"),
      concat               = require("gulp-concat"),
      sass                 = require("gulp-sass")(require("sass")),
      autoprefixer         = require("gulp-autoprefixer"),
      pug                  = require("gulp-pug"),
      livereload           = require("gulp-livereload"),
      sourcemaps           = require("gulp-sourcemaps"),
      minify               = require("gulp-minify");

function html(cb) {
  src("./project/html/*.pug")
    .pipe(pug())
    .pipe(dest("./public/"))
    .pipe(livereload());
  cb();
}

function css(cb) {
  src(["./project/css/**/*.css", "./project/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./public/css"))
    .pipe(livereload());
  cb();
}

function js(cb) {
  src("./project/js/*.js")
    .pipe(concat())
    .pipe(minify())
    .pipe(dest("./public/js"))
    .pipe(livereload());
  cb();
}

function watchFiles() {
  require("./server.js");
  livereload.listen();
  watch("./project/html/**/*.pug", html);
  watch(["./project/css/**/*.css", "./project/css/**/*.scss"], css);
  watch("./project/js/*.js", js);
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watchFiles;
