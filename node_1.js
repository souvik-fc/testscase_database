var fs = require("fs");
var path = '/home/souvikjana/Desktop/Regression_testcase/';
var link = 'f.js';
var gg;

nodee(path);

function nodee(path) {

    fs.readdir(path, function(err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function(file) {

            gg = path + file;
            stats = fs.lstatSync(gg);

            // Check file type
            if (stats.isFile(gg)) {
                chart(gg, link);
                console.log(gg);
            } else if (stats.isDirectory(gg)) {
                console.log(gg + '----------------------------');
                nodee(gg + '/');

            }

            // console.log(path + file);
        });
    });

}

function chart(file, link) {
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (i in obj) {

        fs.writeFileSync(link, JSON.stringify(obj[i], null, 4));
    }
}