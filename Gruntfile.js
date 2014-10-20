module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/global.css': 'scss/global.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'js/libs/*.js',
          'bower_components/foundation/js/foundation.min.js',
          'js/global.js'
        ],
        dest: 'js/build/global.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/global.js',
        dest: 'js/build/global.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass','concat','uglify']);
  grunt.registerTask('default', ['build','watch']);
}