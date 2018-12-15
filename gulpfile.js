var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify"),
		pug            = require('gulp-pug'),
		plumber        = require('gulp-plumber'),
		rsync          = require('gulp-rsync');

// Пользовательские скрипты проекта
var paths = {
	pug : {
		src : 'app/template/pages/*.pug',
		watch : 'app/template/**/*.pug',
		dist : 'app/'
	},
	sass : {
		src : 'app/style/**/*.sass',
		watch : 'app/style/**/*.sass',
		dist : 'app/css'
	}
}

gulp.task('clean:build', function() {
	return del('production');
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

// Скрипты проекта
gulp.task('pug', function() {
	// var locals = require('app/template/content.json');

	gulp.src(paths.pug.src)
		.pipe(plumber())
		.pipe(pug({
			// locals : locals,
			pretty: true,
		}).on('error', notify.onError(function(err){
			return {
				title: 'Pug',
				message: err.message
			};
		})))
		.pipe(gulp.dest(paths.pug.dist))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
	return gulp.src(paths.sass.src)
	.pipe(plumber())
	.pipe(sass({outputStyle: 'expand'})
	.on('error', notify.onError(function(err){
		return {
			title: 'Style',
			message: err.message
		};
	})))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest(paths.sass.dist))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('common-js', function() {
	return gulp.src([
		'app/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('js', gulp.parallel('common-js'), function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.min.js', // Всегда в конце
		])
	.pipe(concat('app.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});



// Build

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin())) // Cache Images
	.pipe(gulp.dest('production/img')); 
});
gulp.task('copy:html', function() {
	return gulp.src('app/*.html')
		.pipe(gulp.dest('production'));
});

gulp.task('copy:htaccess', function() {
	return gulp.src('app/ht.access')
		.pipe(rename('.htaccess'))
		.pipe(gulp.dest('production'));
});

gulp.task('copy:css', function() {
	return gulp.src('app/css/app.min.css')
		.pipe(gulp.dest('production/css'));
});
gulp.task('copy:js', function() {
	return gulp.src('app/js/app.min.js')
		.pipe(gulp.dest('production/js'));
});
gulp.task('copy:fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('production/fonts'));
});


gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'production/**',
	'production/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('rsync', function() {
	return gulp.src('production/**')
	.pipe(rsync({
		root: 'production/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Скрытые файлы, которые необходимо включить в деплой
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}));
});


gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('watch', function() {
	gulp.watch(paths.pug.watch, gulp.parallel('pug'));
	gulp.watch(paths.pug.watch, gulp.parallel('sass'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('watch', 'pug','sass', 'js', 'browser-sync'));
gulp.task('build', gulp.series('clean:build', gulp.parallel('imagemin', 'sass', 'js', 'copy:htaccess', 'copy:html', 'copy:css', 'copy:js', 'copy:fonts')));
