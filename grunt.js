/*global module:false*/
module.exports = function(grunt) {
  var jquery = [
    'lib/jquery-1.8.1.js'
  ];
  var backbone = [
    'lib/underscore.js',
    'lib/backbone.js',
    'lib/backbone.localStorage.js'
  ];
  var appCode = [
    'src/app.js',
    'src/status.js',
    'src/statuses.js',
    'src/postStatus.js',
    'src/statusList.js'
  ];
  var prodCode = jquery.concat(backbone).concat(appCode);

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! barcamp-omaha-demo - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'test/**/*.js'].concat(appCode)
    },
    jasmine: {
      src: prodCode,
      specs: 'specs/**/*Spec.js',
      timeout: 1000,
      junit: {
        output: 'target/junit'
      }
    },
    concat: {
      dist: {
        src: prodCode,
        dest: 'target/app.js'
      },
      cowboy: {
        src: jquery.concat([
          'src/cowboy.js'
        ]),
        dest: 'target/app-cowboy.js'
      }
    },
    min: {
      'target/app-cowboy.min.js': ['target/app-cowboy.js'],
      'target/app.min.js': ['target/app.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint jasmine'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');
  // Default task.
  grunt.registerTask('default', 'jasmine concat min');

};
