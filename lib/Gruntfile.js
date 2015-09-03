
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'styles/style.css': 'sass/main.scss'
        }
    }
    },
    requirejs: {
    js: {
      options: {
          uglify2: {
              mangle: false
          },
          baseUrl: "../app",
          mainConfigFile: "../app/main.js",
          name: 'main',
          out: "../app/main-require.js",
          optimize: 'uglify2'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./javascripts/**/*.js'],
        tasks: ['jshint']
      },
    
      sassy: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
      }
   } 
    
  });
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['requirejs','sass','watch']);
};
