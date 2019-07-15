//该文件的作用：写任务，在命令行执行任务就可以进行自动化的构建了
//https://www.cnblogs.com/2050/p/4198792.html

/*
 task（） 布置任务

	三个参数：

	第一个参数：任务名称  默认任务 default

	第二个参数：该任务依赖的其他任务，是一个数组（可选）

	第三个参数：任务回调函数（任务执行）
 */

let gulp = require('gulp');

// gulp.task('default',['say','coding'],function() {
//     return console.log('这是默认的任务');
// });

// //写完一个任务，想执行，就到命令行写指令：gulp 任务名称

// gulp.task('say',function() {
//     return console.log('say');
// });

// gulp.task('coding',function() {
//     return console.log('coding');
// });



/*
src() 源文件路径 参数可以是一个数组
dest（）目标文件路径 dest参数中的文件夹名称可以自动创建
pipe（）管道 ，表示输送，就是下一步 
 */

 //需求：把src下面的index.html 拷贝到 dist目录下
// gulp.task('copyhtml',function() {
//     return gulp.src('src/index.html')
//                .pipe(gulp.dest('dist'));
// });

// //需求：把src的html目录拷贝到dist

// gulp.task('copyfile',function() {
//     return gulp.src('src/html/*')
//                .pipe(gulp.dest('dist/html'));
// });

// //需求：把src下的css目录拷贝到dist对应目录下
// gulp.task('copycss',function() {
//     return gulp.src('src/css/*')
//                .pipe(gulp.dest('dist/css'));
// });

// gulp.task('copycss2',['copycss'],function() {
//     return gulp.src('src/css/**')
//                .pipe(gulp.dest('dist/css'));
// });

// //下面的这种写法拷贝不到文件，只能拷贝空目录
// gulp.task('copycss3',function() {
//     return gulp.src('src/css')
//                .pipe(gulp.dest('dist/css'));
// });

// /*
//     watch() 监听

// 	两个参数：
// 	参数一：监听文件的路径
// 	参数二：监听任务名称 数组
//  */
// gulp.task('watchhtml',function() {
//     return gulp.watch('src/index.html',['copyhtml']);
// });

// //实用的任务：插件的实用 插件的安装 ：npm install --save -dev 插件名称


// //1.压缩html

// var minifyhtml = require('gulp-htmlmin');

// gulp.task('htmlmin',function() {
// 	var options = {
//         removeComments: true,//清除HTML注释
//         collapseWhitespace: true,//压缩HTML
//         collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
//         removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
//         removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//         removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//         minifyJS: true,//压缩页面JS
//         minifyCSS: true//压缩页面CSS
//   };
//   return gulp.src('src/html/01index.html')
//   			 .pipe(minifyhtml(options))
//   			 .pipe(gulp.dest('dist/html'));
// });

//2.压缩css
var minifycss = require('gulp-cssmin');

gulp.task('cssmin',function() {
	return gulp.src('src/css/*.css')
			   .pipe(minifycss())
			   .pipe(gulp.dest('src/'));
});

// //3.重名名
// var rename = require('gulp-rename');
// gulp.task('cssmin2',function() {
// 	return gulp.src('src/css/css.css')
// 			   .pipe(minifycss())
// 			   .pipe(rename('css.min.css'))
// 			   .pipe(gulp.dest('dist/css'));
// });

// //4.压缩js:ES6语法的js不能直接压缩，需要先转成ES5才能压缩

// var minifyjs = require('gulp-uglify');//压缩js插件
// var babel = require('gulp-babel');//ES6转成ES5严格模式

// gulp.task('jsmin',function() {
// 	return gulp.src('src/js/*.js')
// 				.pipe(babel({//es6转es5
// 					'presets' : ['es2015']
// 				}))
// 				.pipe(minifyjs())//压缩js
// 				.pipe(rename('common.min.js'))//重命名
// 				.pipe(gulp.dest('src/js'));//ES6不能直接压缩，需要先转成es5
// });


// //5.ES6转成ES5严格模式

// gulp.task('es6toes5',function() {
//     return gulp.src('src/js/js.js')
//                .pipe(babel({
//                    'presets' : ['es2015']
//                }))
//                .pipe(gulp.dest('dist/js'));
// });

// //6.编译sass文件

// var sass = require('gulp-sass');

// gulp.task('sass',function() {
// 	return gulp.src('src/sass/list.scss')
// 				.pipe(sass())
// 				.pipe(gulp.dest('src/css'));
// });

// //7.合并文件
// var concat=require('gulp-concat');
// gulp.task('concat',function(){
//   return gulp.src(['src/css/cc.css','src/css/bb.css'])
//   			 .pipe(concat('all.css'))//合并文件
//   			 .pipe(minifycss())//压缩
//   			 .pipe(rename('all.min.css'))//重命名
//   			 .pipe(gulp.dest('dist/css'));
// });

// //8.压缩图片
// //初级版
// var imagemin=require('gulp-imagemin');

// gulp.task('imgmin',function(){
//   return gulp.src('src/img/*.{png,jpg,gif,ico}')
//   			 .pipe(imagemin())
//   			 .pipe(gulp.dest('dist/img'));
// });

// //中等压缩
// gulp.task('imgmin2', function () {
//     gulp.src('src/img/*.{png,jpg,gif,ico}')
//         .pipe(imagemin({
//             optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//             multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//         }))
//         .pipe(gulp.dest('dist/img'));
// });

// //强力版：https://www.cnblogs.com/miny-simp/p/gulp.html
// var pngquant = require('imagemin-pngquant');
 
// gulp.task('testImagemin', function () {
//     gulp.src('src/img/*.{png,jpg,gif,ico}')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
//             use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
//         }))
//         .pipe(gulp.dest('dist/img'));
// });

