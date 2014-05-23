'use strict';

module.exports = function(grunt) {

  /**
  ** set server variable to false
  ** if you dislike the browser autoreload
  **/
  var server = true,
      env = grunt.option('env') || 'dev',
      config = {
        bootstrapPath: 'bower_components/bootstrap-sass-official/vendor/assets',
        modernizr: 'modernizr.min.js',
        jQuery: 'jquery-1.11.1.min.js',
        app: 'app',
        dist: 'production',
      };

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),

    /**
    ** Verbose task descriptions are available
    ** in the accordingly task.js files
    **/
    imagemin: require('./tasks/image-tasks.js'),
    compass: require('./tasks/sass-tasks.js'),
    copy: require('./tasks/copy-tasks.js'),
    htmlmin: require('./tasks/html-tasks.js'),
    concat: require('./tasks/concat-js-tasks.js'),
    jshint: require('./tasks/jshint-tasks.js'),
    uglify: require('./tasks/uglify-js-tasks.js'),
    clean: require('./tasks/clean-tasks.js'),
    express: require('./tasks/server-tasks.js'),
    open: require('./tasks/browser-tasks.js'),

    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      express: {
        files: [
          '<%= config.app %>/**/*.html',
          '<%= config.app %>/css/*.css',
          '<%= config.app %>js/*.js',
          '<%= config.app %>/img/*.png',
          '<%= config.app %>/img/*.jpg',
          '<%= config.app %>/img/*.gif',
        ],
        tasks: 'express'
      },
      compass: {
        files: '<%= config.app %>/**/*.scss',
        tasks: 'compass:dev'
      },
      imagemin: {
        files: [
          '<%= config.app %>/img/*.png',
          '<%= config.app %>/img/*.jpg',
          '<%= config.app %>/img/*.gif'
        ],
        tasks: ['imagemin']
      },
      scripts: {
        files: [
          '<%= config.app %>/js/scripts/**/*.js',
          '<%= config.app %>/js/libs/**/*.js',
          'Gruntfile.js'
        ],
        tasks: 'scripts'
      }
    }
  });

  if ( env === 'production' ) {
    grunt.registerTask('build', ['clean:dist', 'copy', 'uglify', 'imagemin', 'htmlmin', 'compass:dist']);
  } else if ( server === true ) {
    grunt.registerTask('build', ['clean:dev', 'scripts','compass:dev', 'imagemin', 'server', 'watch']);
  } else {
    grunt.registerTask('build', ['clean:dev', 'scripts','compass:dev', 'imagemin', 'watch']);
  }

  grunt.registerTask('scripts', ['concat:init', 'jshint:beforeconcat', 'concat:basic', 'jshint:afterconcat']);
  grunt.registerTask('server', ['express', 'open']);
  grunt.registerTask('default', ['build']);
};
