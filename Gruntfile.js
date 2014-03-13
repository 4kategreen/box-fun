module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      all: {
        options: {
          paths: ['styles/less','bower_components/bootstrap/less']
        },
        files: {
          'styles/boxes.css': 'styles/less/boxes.less'
        }
      }
    },

    watch: {
      options: {
        interrupt: true
      },
      less: {
        files: 'styles/less/*.less',
        tasks: ['less']
      },
      tests: {
        files: 'scripts/**/*.js',
        tasks: ['jasmine']
      }
    },

    jasmine: {
      src: 'scripts/baseTests.js', // this may need to dig into the site-specific stuff
      options: {
        specs: 'scripts/tests/baseTests.js'
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less','jasmine']);

};