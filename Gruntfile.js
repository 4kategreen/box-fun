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
      files: 'styles/less/*.less',
      tasks: ['less'],
      options: {
        interrupt: true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};