module.exports = function(grunt) {

  "use strict";

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    // A list of files which will be syntax-checked by JSHint.
    jshint: {
      files: ['src/js/shims.js', 'src/js/wildchat.js', 'src/js/wildchat-ui.js'],
      options: {
        regexdash: false
      }
    },

    // Precompile templates and strip whitespace with 'processContent'.
    jst: {
      compile: {
        options: {
          path: 'templates',
          namespace: 'WildchatDefaultTemplates',
          prettify: true,
          processContent: function(src) {
            return src.replace(/(^\s+|\s+$)/gm, '');
          }
        },
        files: {
          'compiled/templates.js': ['templates/*.html']
        }
      }
    },

    // Compile and minify LESS CSS for production.
    less: {
      development: {
        files: {
          "dist/wildchat.css": "src/less/styles.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "dist/wildchat.min.css": "src/less/styles.less"
        }
      }
    },

    // Concatenate files in a specific order.
    concat: {
      js: {
        src: [
          'src/js/libs/underscore-1.7.0.min.js',
          'compiled/templates.js',
          'src/js/shims.js',
          'src/js/wildchat.js',
          'src/js/wildchat-ui.js'
        ],
        dest: 'dist/wildchat.js'
      }
    },

    // Minify concatenated files.
    uglify: {
      dist: {
        src: ['<%= concat.js.dest %>'],
        dest: 'dist/wildchat.min.js'
      }
    },

    // Clean up temporary files.
    clean: ['compiled/'],

    // Tasks to execute upon file change when using `grunt watch`.
    watch: {
      src: {
        files: ['src/**/*.*', 'templates/**/*.*'],
        tasks: ['default']
      }
    }
  });

  // Load specific plugins, which have been installed and specified in package.json.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task operations if simply calling `grunt` without options.
  grunt.registerTask('default', ['jshint', 'jst', 'less', 'concat', 'uglify', 'clean']);

};
