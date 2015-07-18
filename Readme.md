# grunt-templates-hogan [![Build Status](https://secure.travis-ci.org/vanetix/grunt-templates-hogan.png?branch=master)](https://travis-ci.org/vanetix/grunt-templates-hogan)

Hogan template compiler task for grunt.


## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-templates-hogan`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-templates-hogan');
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
### amdRequire `object`
Wraps the compiled templates with the require.js `define(function() {})` function.

*Example:*
```javascript
options: {
  amdWrapper: true,
  amdRequire: {
    hogan: "Hogan",
    otherLibrary: "$"
  }
}
```
*Produces:*
```javascript
define(["hogan","otherLibrary"], function(Hogan, $) {
  this["Templates"] = this["Templates"] || {};

  return this["Templates"];
});
```

### commonJsWrapper `boolean`
Wraps the compiled templates in a CommonJS `module.exports` for use with [component(1)](https://github.com/component/component).

*Example:*
```javascript
options: {
  commonJsWrapper: true
}
```
*Produces:*
```javascript
this["Templates"] = this["Templates"] || {};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = this["Templates"];
}

// with "component build" this will be wrapped in:
// require.register("project/file", function(exports, require, module){
// ...
// });
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

### generateTsd `boolean`
Generate a TypeScript definition file alongside the output.

### tsdModuleBase `string`
When `generateTsd` is true, set the root of your TypeScript project. Optional, but highly recommended for use with `generateTsd`.

### tsdExtension `string`
When `generateTsd` is true, set the extension of the generated definition file. Defaults to `.d.ts`.

## Configuration example
```javascript
hogan: {
      publish: {
        options: {
          prettify: true,
          defaultName: function(file) {
            return file.toUpperCase();
          }
        },
        files:{
          "path/to/compiled.js": ["path/to/source/**/*.html"]
        }
      }
    }
```

## TypeScript configuration example

*Example:*
```javascript
files: [
  {
    expand: true,
    cwd: 'src/templates/',
    dest: 'src/ts/generated/templates',
    src: ['**/*'],
    filter: 'isFile',
    ext: '.js'
  }
]
options: {
  generateTsd: true,
  tsdModuleBase: 'src/ts'
}
```

As written above, this will generate .d.ts files like this:
```typescript
declare module "generated/templates/myTemplate" {
  export var myTemplate:{
    render(params?:Object):HTMLElement;
  };
}
```

## License

Copyright (c) 2012 Matt McFarland and Contributors
Licensed under the MIT license.
