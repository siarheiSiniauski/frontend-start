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

gulp.task('pug', function() {
	return gulp.src("app/template/pages/*.pug")
		.pipe(plumber())
		.pipe(pug({
			pretty: true,
		}).on('error', notify.onError(function(err){
			return {
				title: 'Pug',
				message: err.message
			};
		})))
		.pipe(gulp.dest("app/"))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('sass', function() {
	return gulp.src('app/style/**/*.sass')
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
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({stream: true}));
});



gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/global/plugins/bower_components/jquery/dist/jquery.min.js',
		'app/libs/jquery.nicescroll/dist/jquery.nicescroll.min.js',
		'app/libs/global/plugins/bower_components/jquery-cookie/jquery.cookie.js',
		'app/libs/global/plugins/bower_components/bootstrap/dist/js/bootstrap.min.js',
		'app/libs/global/plugins/bower_components/jasny-bootstrap-fileinput/js/jasny-bootstrap.fileinput.min.js',
		'app/libs/global/plugins/bower_components/typehead.js/dist/handlebars.js',
		'app/libs/global/plugins/bower_components/typehead.js/dist/typeahead.bundle.min.js',
		'app/libs/global/plugins/bower_components/jquery.sparkline.min/index.js',
		'app/libs/global/plugins/bower_components/jquery-easing-original/jquery.easing.1.3.min.js',
		'app/libs/global/plugins/bower_components/ionsound/js/ion.sound.min.js',
		'app/libs/global/plugins/bower_components/bootbox/bootbox.js',
		'app/libs/global/plugins/bower_components/summernote/dist/summernote.min.js',
		'app/libs/dropzone/dist/min/dropzone.min.js',
		'app/libs/jQuery-UI-Sortable/jquery-ui-sortable.min.js',
		'app/libs/global/plugins/bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',		
		'app/libs/global/plugins/bower_components/bootstrap-datepicker-vitalets/js/bootstrap-datepicker.js',		
		'app/libs/global/plugins/bower_components/chosen_v1.2.0/chosen.jquery.min.js',		
		'app/js/common.js', // Всегда в конце
		])
	.pipe(concat('app.min.js'))
	//.pipe(uglify()) // Минимизировать весь js (на выбор)
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
	gulp.watch('app/template/**/*.pug', gulp.parallel('pug'));
	gulp.watch('app/style/**/*.sass', gulp.parallel('sass'));
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('watch', 'pug', 'sass', 'scripts','browser-sync'));
gulp.task('build', gulp.series('clean:build', gulp.parallel('imagemin', 'sass', 'scripts', 'copy:htaccess', 'copy:html', 'copy:css', 'copy:js', 'copy:fonts')));
