var grunt = require('grunt'),
  normalize = grunt.util.normalizelf;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.hogan = {

  base: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/hulked.js"));
    result = normalize(grunt.file.read("build/hulked.js"));
    test.equal(expect, result, "should compile base template correctly");

    return test.done();
  },

  multiple: function(test) {
    var expect,
        result;

    test.expect(2);

    expect = normalize(grunt.file.read("test/expected/hulked.js"));
    result = normalize(grunt.file.read("build/first.js"));
    test.equal(expect, result, "should compile multiple files independently");

    expect = normalize(grunt.file.read("test/expected/bad.js"));
    result = normalize(grunt.file.read("build/second.js"));
    test.equal(expect, result, "should compile multiple files independently");

    return test.done();
  },

  badName: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/bad.js"));
    result = normalize(grunt.file.read("build/bad.js"));
    test.equal(expect, result, "should escape bad filenames");

    return test.done();
    },

  prettyAmd: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/prettyAmd.js"));
    result = normalize(grunt.file.read("build/prettyAmd.js"));
    test.equal(expect, result, "should compile AMD with pretty option");

    return test.done();
  },

  customAmd: function(test) {
    var expect,
        result;

    test.expect(1);
    expect = normalize(grunt.file.read("test/expected/customAmd.js"));
    result = normalize(grunt.file.read("build/customAmd.js"));
    test.equal(expect, result, "should compile AMD with specified requires");

    return test.done();
  },

  prettify: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/pretty.js"));
    result = normalize(grunt.file.read("build/pretty.js"));
    test.equal(expect, result, "should compile pretty template");

    return test.done();
  },

  amdWrapper: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/amdWrapper.js"));
    result = normalize(grunt.file.read("build/amdWrapper.js"));
    test.equal(expect, result, "should build a template wrapped for AMD");

    return test.done();
  },

  commonJsWrapper: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = normalize(grunt.file.read("test/expected/commonJsWrapper.js"));
    result = normalize(grunt.file.read("build/commonJsWrapper.js"));
    test.equal(expect, result, "should build a template wrapped for CommonJS");

    return test.done();
  }
};
