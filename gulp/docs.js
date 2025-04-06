const gulp = require("gulp");

// HTML

const replace = require("gulp-replace");
const fileInclude = require("gulp-file-include");
const htmlclean = require("gulp-htmlclean");
const autoprefixer = require("gulp-autoprefixer");
// const csso = require("gulp-csso");
const webpCss = require("gulp-webp-css");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fs = require("fs");
// Не будем группировать медизапросы. Так как лишние проблемы появлются, да и tailwind 3 по умолчанию группирует медизапросы. Правда только с утилитами.
// const groupMedia = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const changed = require("gulp-changed");
// Поменяем csso на cssnano (плагин postcss). Потому что csso при минификации удаляет медиазапросы, вложенные в классы.
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");

gulp.task("clean:docs", function (done) {
  if (fs.existsSync("./docs/")) {
    return gulp.src("./docs/", { read: false }).pipe(clean({ force: true }));
  }
  done();
});

const fileIncludeSetting = {
  prefix: "@@",
  basepath: "@file",
};

const plumberNotify = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

gulp.task("html:docs", function () {
  return gulp
    .src(["./src/html/**/*.html", "!./src/html/blocks/*.html"])
    .pipe(changed("./docs/"))
    .pipe(plumber(plumberNotify("HTML")))
    .pipe(fileInclude(fileIncludeSetting))
    .pipe(
      replace(
        /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
        "$1./$4$5$7$1"
      )
    )
    .pipe(htmlclean())
    .pipe(gulp.dest("./docs/"))
    .pipe(browserSync.stream());
});

gulp.task("css:docs", function () {
  const plugins = [cssnano()];
  return (
    gulp
      .src(["./src/css/**/*.css", "!./src/css/input.css"])
      .pipe(changed("./docs/css/"))
      .pipe(plumber(plumberNotify("CSS")))
      .pipe(autoprefixer())
      // .pipe(groupMedia())
      // .pipe(csso())
      .pipe(postcss(plugins))
      .pipe(
        replace(
          /(['"]?)(\.\.\/)+(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
          "$1$2$3$4$6$1"
        )
      )
      .pipe(gulp.dest("./docs/css/"))
      .pipe(browserSync.stream())
  );
});

gulp.task("images:docs", function () {
  return gulp
    .src("./src/img/**/*")
    .pipe(changed("./docs/img/"))
    .pipe(webp())
    .pipe(gulp.dest("./docs/img/"))
    .pipe(gulp.src("./src/img/**/*"))
    .pipe(changed("./docs/img/"))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("./docs/img/"))
    .pipe(browserSync.stream());
});

gulp.task("fonts:docs", function () {
  return gulp
    .src("./src/fonts/**/*")
    .pipe(changed("./docs/fonts/"))
    .pipe(gulp.dest("./docs/fonts/"))
    .pipe(browserSync.stream());
});

gulp.task("files:docs", function () {
  return gulp
    .src("./src/files/**/*")
    .pipe(changed("./docs/files/"))
    .pipe(gulp.dest("./docs/files/"))
    .pipe(browserSync.stream());
});

gulp.task("js:docs", function () {
  return gulp
    .src("./src/js/*.js")
    .pipe(changed("./docs/js/"))
    .pipe(plumber(plumberNotify("JS")))
    .pipe(babel())
    .pipe(webpack(require("./../webpack.config.js")))
    .pipe(gulp.dest("./docs/js"))
    .pipe(browserSync.stream());
});

gulp.task("browsersync:docs", function () {
  browserSync.init({
    server: {
      baseDir: "./docs/",
    },
  });
});
