module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/hogan.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    nodeunit: {
      tests: ['test/index.js']
    },

    clean: {
      tests: ['build']
    },

    hogan: {
      base: {
        files:{
          "build/hulked.js": ["test/fixtures/template.html"]
        }
      },
      multiple: {
        files:{
          "build/first.js": ["test/fixtures/template.html"],
          "build/second.js": ["test/fixtures/it's-a-bad-name.html"]
        }
      },
      badName: {
        files: {
          "build/bad.js": ["test/fixtures/*bad*"]
        }
      },
      prettyAmd: {
        options: {
          prettify: true,
          amdWrapper: true
        },
        files:{
          "build/prettyAmd.js": ["test/fixtures/template.html"]
        }
      },
      customAmd: {
        options: {
          amdWrapper: true,
          amdRequire: {
            hogan: "Hogan",
            otherDependency: "$"
          }
        },
        files:{
          "build/customAmd.js": ["test/fixtures/template.html"]
        }
      },
      prettify: {
        options: {
          prettify: true
        },
        files: {
          "build/pretty.js": ["test/fixtures/template.html"]
        }
      },
      amdWrapper: {
        options: {
          amdWrapper: true
        },
        files: {
          "build/amdWrapper.js": ["test/fixtures/template.html"]
        }
      },
      commonJsWrapper: {
        options: {
          defaultName: function(filename) {
            return filename.split('/').pop();
          },
          commonJsWrapper: true
        },
        files: {
          "build/commonJsWrapper.js": ["test/fixtures/template.html"]
        }
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Clean, compile, and run all tests
  grunt.registerTask('test', ['clean', 'hogan', 'nodeunit']);

  // By default run jshint and test
  grunt.registerTask('default', ['jshint', 'test']);

};
