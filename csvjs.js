/**
 * @author XHiddenProjects
 * @version 1.0.0
 * @description CSVJS allows comma-separated values in JS
 */
class csvJS{
    /**
     * Creates a CSV object to configure
     * @param {String} splice [Optional] - Character to splice in row
     * @param {String} EOF [Optional] - Character to split each column
     */
    constructor(splice=',', EOF='\n'){
        this.COMMA = ',';
        this.SEMI_COMMA=';';
        this.COLON = ':';
        this.BAR = '|';
        this.TAB = '\t';
        this.NL = '\n';

        this.setSplice = (typeof splice!=='undefined' ? splice : this.COMMA);
        this.setEOF = (typeof EOF!=='undefined' ? EOF : this.NL);

    }
    /**
     * Converts CSV file to an Object
     * @param {String} file CSV File path to return as
     * @param {Number|Number[]} [ignoreLines=0] Ignore lines. Use 0 to use no-ignore lines
     * @returns {Object} CSV Object
     */
    fromFile(file, ignoreLines=0){
        const splice = this.setSplice, eof = this.setEOF, results=[], keys=[];
        const xml = new XMLHttpRequest();
        if(!file.match(/\.csv$/))
            throw new TypeError("Your file must be a CSV file");
        xml.onreadystatechange = function(){
            if(this.readyState===4&&this.status==200){
                let getCSV = this.responseText;
                getCSV = getCSV.replaceAll('\r','');
                const newLine = getCSV.split(eof);
                for(let i=0;i<newLine.length;i++){
                    if(i==0){
                        newLine[i].split(splice).forEach((key)=>{
                            keys.push(key.trim());
                        });
                    }else{
                        if((!Array.isArray(ignoreLines)&&i!=ignoreLines)||(Array.isArray(ignoreLines)&&!ignoreLines.includes(i))){
                            const obj = new Object();
                            for(let k=0;k<keys.length;k++){
                                const values = newLine[i].split(splice);
                                obj[keys[k]] = values[k].trim();
                            }
                            results.push(obj);
                        }
                    }
                }
            }
        }
        xml.open('GET',file,false);
        xml.send();
        return results;
    }
    /**
     * Converts CSV from string to object
     * @param {String} str CSV string
     * @param {Number|Number[]} ignoreLines Lines to ignore
     * @returns {Object[]} CSV object
     */
    fromString(str, ignoreLines=0){
        let getCSV = str;
        const splice = this.setSplice, eof = this.setEOF, results=[], keys=[];
        getCSV = getCSV.replaceAll('\r','');
        const newLine = getCSV.split(eof);
        for(let i=0;i<newLine.length;i++){
            if(i==0){
                newLine[i].split(splice).forEach((key)=>{
                    keys.push(key.trim());
                });
            }else{
                if((!Array.isArray(ignoreLines)&&i!=ignoreLines)||(Array.isArray(ignoreLines)&&!ignoreLines.includes(i))){
                    const obj = new Object();
                    for(let k=0;k<keys.length;k++){
                        const values = newLine[i].split(splice);
                        obj[keys[k]] = values[k].trim();
                    }
                    results.push(obj);
                }
            }
        }
        return results;
    }
    /**
     * Creates a table off the object
     * @param {Object} obj Object of the CSV
     * @param {Element} elem Element to target the CSV
     */
    toTable(obj, elem){
        const tableElem = document.createElement('table'),
        tableHead = document.createElement('thead'),
        tableBody = document.createElement('tbody'),
        headTR = document.createElement('tr'),
        rowCount = Object.keys(obj[0]);

        if(typeof obj!=='object')
            throw new TypeError('Argument must be an object');
        rowCount.forEach((keys)=>{
            const th = document.createElement('th');
            th.innerText = keys;
            headTR.appendChild(th);
        });
        tableHead.appendChild(headTR);
        tableElem.appendChild(tableHead);

        for(let k=0;k<obj.length;k++){
            const values = Object.values(obj[k]);
            const bodyTR = document.createElement('tr');
            for(let v=0;v<values.length;v++){
                const td = document.createElement('td');
                td.innerText = values[v];
                bodyTR.appendChild(td);
            }
            tableBody.appendChild(bodyTR);
        }
        tableElem.appendChild(tableBody);
        document.querySelector(elem).appendChild(tableElem);
    }
    /**
     * Converts Object to CSV
     * @param {Object} obj Object to convert
     * @returns {String} CSV String
     */
    toCSV(obj){
        let str = '',
        keys = Object.keys(obj[0]);
        str+=keys.join(this.setSplice)+this.setEOF;
        obj.forEach((e)=>{
            const values = Object.values(e);
            str+=values.join(this.setSplice).trim()+this.setEOF;
        });
        str = str.replace(new RegExp(this.setEOF+'$'),'');

        return str;
    }
}
