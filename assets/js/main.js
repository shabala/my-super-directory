// require.config({
// urlArgs: "bust=" + (new Date()).getTime(),
// paths: {
// 'angular': '/bower_components/angular/angular.js',
// 'jquery': '/bower_components/jquery/dist/jquery.js',
// 'bootstrapJs': '/bower_components/bootstrap/dist/js/bootstrap.js'
// },
// /**
// * for libs that either do not support AMD out of the box, or
// * require some fine tuning to dependency mgt'
// */
// shim: {
// 'bootstrapJs': ['jquery'],
// 'angular': {'exports': 'angular'}
// }
// });
// window.name = "NG_DEFER_BOOTSTRAP!";
// require([
// 'angular',
// 'app',
// 'bootstrapJs'
// ], function(angular, app) {
// 'use strict';
// var $html = angular.element(document.getElementsByTagName('html')[0]);
// angular.element().ready(function() {
// angular.resumeBootstrap([app.name]);
// });
// }
// );