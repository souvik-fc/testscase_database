var fs = require("fs");
var path = '/home/souvikjana/Desktop/Regression_testcase/';
var link = 'f.js';
//console.log("Going to read directory /tmp");

var mysql = require('mysql'),
  //  fs = require('fs'),
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "testcase_db"
    }),query;
var gg;

nodee(path);


function nodee(path) {

    fs.readdir(path, function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {
            
            gg = path + file;
          stats=fs.lstatSync(gg);
                //console.log(stats);
                

                // Check file type
                if (stats.isFile(gg)) {
                    chart(gg, link);
                    console.log(gg);
                } else if (stats.isDirectory(gg)) {
                  
                    nodee(gg + '/');

                }
            
           // console.log(path + file);
        });
    });

}

function chart(file, link) {
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

 /*   console.log(obj.description);

    var kk=JSON.stringify(obj.options.dataSource);
    query = "INSERT INTO all_testcases VALUES('"+obj.description+"','"+obj.options.type+"','"+obj.options.width+"','"+obj.options.height+"','"+obj.options.dataFormat+"','"+kk+"','"+obj.refimage+"','"+obj.id+"','null','null')";
 
    connection.query(query, function(error, rows, fields){
            if(error) {
                console.log(" this query is problemetic"+query);
            }
        }); 
    connection.end();*/
   for (i in obj) {

  //   console.log(obj[i]);

    var kk=JSON.stringify(obj[i].options.dataSource);
    query = "INSERT INTO all_testcases VALUES('"+obj[i].description+"','"+obj[i].options.type+"','"+obj[i].options.width+"','"+obj[i].options.height+"','"+obj[i].options.dataFormat+"','"+kk+"','"+obj[i].refimage+"','"+obj[i].id+"','null','null')";
  
    //    query = "INSERT INTO all_testcases VALUES('null','"+obj[i].options.type+"',1,2,'null','null','null','null','null','null')";

    connection.query(query, function(error, rows, fields){
            if(error) {
                console.log(error);
            }
        }); 
   // connection.end();

     //   fs.writeFileSync(link, JSON.stringify(obj[i], null, 4));
    }
}
//connection.end();