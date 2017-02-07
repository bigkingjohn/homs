var gulp = require('gulp');
var liveServer = require('live-server');

gulp.task('serve-dev', [], function () {
    var params = {
        port: 8080,
        host: "localhost",
        root: "./www/",
        open: false,
        file: "index.html",
        wait: 500
    };

    liveServer.start(params);
})