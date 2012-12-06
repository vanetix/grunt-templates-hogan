var grunt = require('grunt');

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

    expect = grunt.file.read("test/expected/hulked.js");
    result = grunt.file.read("build/hulked.js");
    test.equal(expect, result, "should compile base template correctly");

    return test.done();
  },

  badName: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = grunt.file.read("test/expected/bad.js");
    result = grunt.file.read("build/bad.js");
    test.equal(expect, result, "should escape bad filenames");

    return test.done();
    },

  prettyAmd: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = grunt.file.read("test/expected/prettyAmd.js");
    result = grunt.file.read("build/prettyAmd.js");
    test.equal(expect, result, "should compile AMD with pretty option");

    return test.done();
  },

  prettify: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = grunt.file.read("test/expected/pretty.js");
    result = grunt.file.read("build/pretty.js");
    test.equal(expect, result, "should compile pretty template");

    return test.done();
  },

  amdWrapper: function(test) {
    var expect,
        result;

    test.expect(1);

    expect = grunt.file.read("test/expected/amdWrapper.js");
    result = grunt.file.read("build/amdWrapper.js");
    test.equal(expect, result, "should build a template wrapped for AMD");

    return test.done();
  }
};