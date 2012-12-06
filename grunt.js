module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/index.js']
    },

    lint: {
      files: ['grunt.js', 'tasks/*.js', '<config:test.files>']
    },

    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
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
        node: true,
        es5: true,
        strict: false
      },
      globals: {}
    },

    clean: {
      test: ['build']
    },

    hogan: {
      base: {
        files:{
          "build/hulked.js": ["test/fixtures/template.html"]
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
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Use clean task
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Lint, clean, compile, and run all tests
  grunt.registerTask('default', 'lint clean hogan test');

};