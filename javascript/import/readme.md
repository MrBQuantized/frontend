# Importing files in JS

- In the past people used `require` function to import functions and codes from other files. But, now we have `import` and `export`. 
- We can only import certain functions and variables. 

## Steps:
1. Export the particular function or code from the source file using the `export` keyword.
Example:

```javascript
//string_function.js

export const capitalizeString = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)};
```

Or even after declaration:
```javascript
// After declaration
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

// 
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

```


2. Then, import the function or code from the source file using the `import` keyword followed by the function or or variable to be imported and the "**filename**". Normally, you can skip the extension name, but in **Node.js** with **ES** modules, you must include it. 

```javascript
//index.js

import { capitalizeString } from "./string_function.js";

const cap = capitalizeString("hello!");

// where (./) iindicates the current directory (i.e assuming that they are in the same directory)

```

## Importing Everything
You can also import everything using a star/asterik `*` and then store them in an object;
```javascript
import * as objectName from "filename.js";

``` 

## Exporting and Importing a Default Export
### Creating a default Export
Export defaults are created like in the example below:
```javascript
export default function defaultFallback(...args) {return arg};
```
You could as well,
### Importing a Default Export
You do not necessarily need curly braces when importing default exports:

```javascript
import subtract from "math_functions.js"

subtract(7,4)
```
