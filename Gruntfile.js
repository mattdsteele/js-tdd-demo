/*global module:false*/
module.exports = function(grunt) {
  var jquery = [
    'public/js/lib/jquery-1.8.1.js'
    ];
  var backbone = [
    'public/js/lib/underscore.js',
    'public/js/lib/backbone.js',
    'public/js/lib/backbone.localStorage.js'
      ];
  var appCode = [
    'public/js/src/app.js',
    'public/js/src/status.js',
    'public/js/src/statuses.js',
    'public/js/src/postStatus.js',
    'public/js/src/statusList.js'
      ];
  var prodCode = jquery.concat(backbone).concat(appCode);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
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
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['public/js/src/**/*.js', 'spec/**/*.js']
      }
    },
    jasmine: {
      tests: {
        src: 'public/js/src/**/*.js',
        options: {
          specs: 'specs/**/*Spec.js',
          vendor: jquery.concat(backbone)
        }
      }
    },
    concat: {
      dist: {
        src: prodCode,
        dest: 'target/app.js'
      },
      cowboy: {
        src: jquery.concat(['public/js/src/cowboy.js']),
        dest: 'target/app-cowboy.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.
  grunt.registerTask('default', ['concat', 'jasmine']);

};
