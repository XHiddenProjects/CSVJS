# CSVJS
CSVJS Allows CSV, Comma-Separated values, in JS.

### Creating object
To start the object use the `csvJS()` using a custom splicer and EOF(_End of Line_)
```js
/**
  * Creates a CSV object to configure
  * @param {String} splice [Optional] - Character to splice in row
  * @param {String} EOF [Optional] - Character to split each column
  */
const csv = new csvJS(splice=',', EOF='\n')
```

### Import CSV
To import CSV, use the **fromFile** method
```js
/**
  * Converts CSV file to an Object
  * @param {String} file CSV File path to return as
  * @param {Number|Number[]} [ignoreLines=0] Ignore lines. Use 0 to use no-ignore lines
  * @returns {Object[]} CSV Object
  */
csv.fromFile({file_path},ignoreLines=0);
```
