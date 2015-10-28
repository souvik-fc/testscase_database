/*var fs = require('fs');
var stream = fs.open('/home/souvikjana/Desktop/sum.json', 'r');

var content = fs.read('/home/souvikjana/Desktop/sum.json');
//console.log('read data:', content);
var k;*/



var fs = require('fs');
var link = 'f.js';
var path = '/home/souvikjana/Desktop/Regression_testcase/';

traverse(path);

function traverse(path) {
    var list = fs.list(path);

    for (var x = 0; x < list.length; x++) {

        var file = path + list[x];
        //  console.log(file);

        if (file == path + '.' || file == path + '..') {
            console.log(file);
            continue;

        } else if (fs.isFile(file)) {
            // Do something
            // console.log("yesssss");
            console.log(file);
            chart(file, link);
        } else if (fs.isDirectory(file)) {
            console.log(file + '/');
            traverse(file + '/');
        }
        // console.log(path+'/.');
    }
}
//phantom.exit();

//console.log(content);
/*k = new Object({});
k=content;
var c='{"p":"10"}';
//console.log(content);
var k=JSON.parse(content);
console.log(typeof(c));
console.log(typeof(k));
var c=0,m=0;
var a=[],b=[],str;

var path = 'f.js';

for(i in k)
    {
     str=JSON.stringify(k[i]);
     fs.write(path,str, 'w');
        }*/
/*
var path = 'f.js';
var obj = a[0],newstr;

newstr="{"+"\n"+'"'+b[0]+'"'+":"+"{"+'\n';
//console.log(typeof(obj));
//for(i in a[0]){
   
    objfun(a[0]);
   


//  newstr+='"'+i+'"'+":"+'"'+a[0][i].toString()+'"';
//  newstr+='\n';
//}

newstr+="}"+'\n'+"}";
fs.write(path,newstr, 'w');

console.log(typeof(k.showlegend_1_all_booleans_0.options));

function objfun(ob){

for(i in ob){
  
console.log(ob);
    newstr+='"'+i+'"'+":"+'"'+ob[i].toString()+'"';
    newstr+='\n';
    //objfun(ob[i]);
   
}
}
console.log(a);
*/

var str;


function chart(file, link) {
    var content = fs.read(file);
    var k = JSON.parse(content);
    for (i in k) {
        var nn = JSON.stringify(k[i]);
        str += nn + ',';
        fs.write(link, str, 'w');
    }
}





//stream.close();

phantom.exit();