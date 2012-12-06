# grunt-contrib-hogan
[![Build Status](https://secure.travis-ci.org/vanetix/grunt-contrib-hogan.png?branch=master)](https://travis-ci.org/vanetix/grunt-contrib-hogan)

Hogan template compiler task for grunt.


## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-contrib-hogan`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-contrib-hogan');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Overview
Grunt task that compiles Hogan templates into functions that can be loaded into the browser as is, or minified prior to loading.
Configuration for this task is added to your `grunt.js` file with the `hogan` key.

## Parameters
- **files `object`**
  - This sets the files that will be processed, by `destination: [source]`
- **options `object`**
  - This is the options that will be passed to the hogan task

## Options
### namespace `string`
The namespace that the templates will be assigned to, the default is `Templates`.

*Example:*
```javascript
options: {
  namespace: 'T'
}
```

### amdWrapper `boolean`
Wraps the compiled templates with the require.js `define(function() {})` function.

*Example:*
```javascript
options: {
  amdWrapper: true
}
```
*Produces:*
```javascript
define(function() {
  this["Templates"] = this["Templates"] || {};

  return this["Templates"];
});
```

### prettify `boolean`
Strip out spaces from the compiled templates, and make the output look a little better by indenting template definitions.

### defaultName `function`
***args:***
- `filename`
Function that returns the key that the template file will be assigned.

*Example:*
```javascript
options: {
  defaultName: function(filename) {
    return filename.split('/').pop();
  }
}
```

### templateOptions `object`
Any options that might need to be passed to the `Hogan.compile()` function.

## Configuration example
```javascript
hogan: {
      publish: {
        options: {
          prettify: true,
          templateName: function(file) {
            return file.toUppercase();
          }
        },
        files:{
          "path/to/compiled.js": ["path/to/source/**/*.html"]
        }
      }
    }
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
#### 0.0.1 - Initial release

## License
Copyright (c) 2012 Matt McFarland
Licensed under the MIT license.