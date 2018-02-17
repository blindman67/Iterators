const doFor = (count, cb) => { var i = 0; while (i < count && cb(i++,count) !== true); }; // the ; after while loop is important don't remove
const doGrid = (rows, columns, cb) => {var i,j=0; while(j < rows){i=0; while( i < columns){if(cb(i++,j,rows,columns)===true) return}j++}};
const eachOf = (array, cb) => { var i = 0; const len = array.length; while (i < len && cb(array[i], i++, len) !== true ); };
const eachPropertyOf = (obj, cb) => { if(obj) {const keys = Object.keys(obj); var i = 0; var len = keys.length; while(i < len && cb(obj[keys[i]],keys[i], i++, len) !== true ); }};
const setOf = (count, cb = (i)=>i) => {var a = [],i = 0; while (i < count) { a.push(cb(i ++, count)) } return a };