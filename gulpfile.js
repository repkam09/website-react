var browserify = require("browserify");
var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var reactify = require("reactify");


var src = "src/";
var output = "../build/";

// Change into the src directory
process.chdir(src);

var createBrowserify = function () {
	return browserify({
		entries: "./website-react.js",
		extensions: [".jsx"], // Needed to find the React JSX source files.
		transform: [reactify],
		cache: {}, // Required by watchify.
		packageCache: {}, // Required by watchify.
		fullPaths: true
	});
};

var doBrowserify = function (bundle) {
	return bundle.pipe(source("app.js"))
		.pipe(buffer())
		.pipe(rename("app.js"))
		.pipe(gulp.dest(output));
};

gulp.task("browserify", function () {
	var b = createBrowserify();
	return doBrowserify(b.bundle());
});

gulp.task("copy_direct", function () {
	gulp.src(["**/*.html", "**/*.png", "**/*.jpg", "favicon.ico", "**/*.css", "font/*", "**/*.mp3", "**/*.gif", "scripts/*"], {
		buffer: false
	})
		.pipe(gulp.dest(output));
});

gulp.task('applyprod', function () {
	process.env.NODE_ENV = 'production';
});

// The list of tasks to do by default
var tasklist = ["applyprod", "copy_direct", "browserify"];

gulp.task("default", (function () {
	return tasklist;
})());
