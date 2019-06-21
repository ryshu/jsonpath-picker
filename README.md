[![npm version](https://badge.fury.io/js/jsonpath-picker-vanilla.svg)](https://badge.fury.io/js/jsonpath-picker-vanilla) [![Total alerts](https://img.shields.io/lgtm/alerts/g/ryshu/jsonpath-picker.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ryshu/jsonpath-picker/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ryshu/jsonpath-picker.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ryshu/jsonpath-picker/context:javascript) [![Greenkeeper badge](https://badges.greenkeeper.io/ryshu/jsonpath-picker.svg)](https://greenkeeper.io/)

# [JSON path picker](https://ryshu.github.io/jsonpath-picker/)

Note: all this repository is a refactoring in Vanilla JS of [piotros](https://github.com/piotros/json-path-picker) JQuery plugin.

**JSON path picker** is an [online tool](https://ryshu.github.io/jsonpath-picker/) that allows to transform JSON strings into HTML representations.
The main difference to other JSON viewers is that **JSON path picker** allows to find a path to the key by clicking an icon near to the key name.
This simplifies process of creating [JSONPaths](http://goessner.net/articles/JsonPath/) based on mocked responses.

JSON path picker can be also used in your app. Core features are packed as jQuery plugin. Read more about [plugin installation](#plugin-installation), [usage](#plugin-usage) and [options](#plugin-options).

## Features

- Syntax highlighting
- Collapsible and expandable child nodes
- Clickable links
- Easily readable and minimal DOM structure
- Path picking:
  * Two path notations
  * Three quote styles
  * Key processing possibility (using `RegExp`)

## Plugin Installation

Import `jsonpath-picker.min.js` and `jsonpath-picker.min.css` in your application.

## Plugin Usage

1. Create `pre` element for rendered tree output:

  ```html
  <pre id="json-renderer"></pre>
  ```

2. Create path target element:

  ```html
  <input class="path" type="text">
  ```

3. Call the `render()` method and pass your JSON data and path target element selector as an arguments:

  ```js
  var data = {
    "foobar": "foobaz"
  };

  source = document.querySelector('#json-renderer');
  dest = document.querySelectorAll('.path');

  // Browser
  JPPicker.render(source, data, dests);

  // Using Node require
  const JPP = require('jsonpath-picker-vanilla');
  JPPicker.render(source, data, dests);
  ```

## Plugin Options

The `render` method accepts an optional `options` object as a 4th argument.

| Option                     | Type      | Default         | Description                                              |
|----------------------------|-----------|-----------------|----------------------------------------------------------|
| outputCollapsed            | boolean   | `false`         | All nodes are collapsed.                                 |
| outputWithQuotes           | boolean   | `false`         | All keys in output HTML are surrounded with double quotation marks. Eg. `{"foobar": 1}` instead of `{foobar: 1}`.                                                             |
| pathNotation               | string    | `'dots'`        | Path notation type. Accepts `dots` for dots notation (eg. `example.in.dots.notation`) and `brackets` for brackets notation (eg. `['example']['in']['brackets']['notation']`). |
| pathQuotesType             | string    | `'single'`      |  |
| processKeys                | boolean   | `false`         |  |
| keyReplaceRegexPattern     | string    | `undefined`     |  |
| keyReplaceRegexFlags       | string    | `undefined`     |  |
| keyReplacementText         | string    | `''`            |  |
| pickerIcon | string | `#x1f4cb` | Hexa Unicode for picker Icon |
| WithoutPicker | boolean | `false` ||

Example:

```js

source = document.querySelector('#json-renderer');
dest = document.querySelectorAll('.path');

// For Browser
JPPicker.render(source, data, dest, {
    outputWithQuotes: true,
    pathNotation: 'brackets',
    pathQuotesType: 'double'
});

// Using Node require
const JPP = require('jsonpath-picker-vanilla');
JPP.jsonPathPicker(source, data, dest, {
    outputWithQuotes: true,
    pathNotation: 'brackets',
    pathQuotesType: 'double'
});
```

## Contributing

Feel free to post feature requests, create pull requests or report bugs.

## Credits

**JSON path picker** is based on [jQuery json-path picker](https://github.com/piotros/json-path-picker) plugin.
Big thanks to [Piotr 'piotros' Baran](https://github.com/piotros) for creating an awesome project!
