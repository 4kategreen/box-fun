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

    jasmine: {
      all: {
        src: 'scripts/baseTests.js', // this may need to dig into the site-specific stuff
        options: {
          specs: 'scripts/tests/baseTests.js'
        }
      },
      istanbul: {
        src: '<%= jasmine.all.src %>',
        options: {
          specs: '<%= jasmine.all.options.specs %>',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'scripts/tests/coverage/json/coverage.json',
            report: [
              { type: 'html', options: { dir: 'scripts/tests/coverage/html' } },
              { type: 'text-summary' }
            ]
          }
        }
      },
    },

    coverage: {
      options: {
        thresholds: {
          'statements': 90,
          'branches': 90,
          'lines': 90,
          'functions': 90
        },
        dir: 'json',
        root: 'scripts/tests/coverage'
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
        tasks: ['jasmine','cover']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-istanbul-coverage');

  // Default task(s).
  grunt.registerTask('default', ['less','test','coverage']);
  grunt.registerTask('test', ['jasmine:all']);
  grunt.registerTask('cover', ['jasmine:istanbul','coverage']);
};