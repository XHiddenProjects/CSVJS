# CSVJS
CSVJS Allows CSV, Comma-Separated values, in JS.

### Starting up
Use this script to get the script
```html
<script src="https://cdn.jsdelivr.net/gh/XHiddenProjects/CSVJS@1.0.2/csv.min.js"></script>
```

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
const myCSV = csv.fromFile({file_path},ignoreLines=0);
```
### From String
To use a string version of CSV to create an object us the **fromString** method
```js
/**
  * Converts CSV from string to object
  * @param {String} str CSV string
  * @param {Number|Number[]} ignoreLines Lines to ignore
  * @returns {Object[]} CSV object
  */
const myCSV = csv.fromString(str, ignoreLines=0);
```

### Ignoring lines
Use the **_ignoreLines_** parameter of either a **Number** | **Number[]**. Numbers must be start from 1..., **0** means _no-ignore_ or _skip_

### Tables
To load up the table from an object, use the **toTable** method
```js
/**
  * Creates a table off the object
  * @param {Object} obj Object of the CSV
  * @param {Element} elem Element to target the CSV
  */
csv.toTable(myCSV, {element});
```

### Coverting Objects to CSV
To convert objects to CSV, use the **toCSV()** method
```js
/**
  * Converts Object to CSV
  * @param {Object} obj Object to convert
  * @returns {String} CSV String
  */
    csv.toCSV(myCSV);
```

### converting to JSON
To convert objects to JSON format, use **toJSON()** method
```js
 /**
     * Converts CSV Object to JSON
     * @param {Object} obj CSV-rendered Object
     * @param {Number} opt Options. JSON_OPTION_REGULAR | JSON_OPTION_TRANSPOSE
     * @returns {String} JSON object
     */
    csv.toJSON(myCSV,opt)
```
