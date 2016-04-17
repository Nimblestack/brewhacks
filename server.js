    // SERVER
// include all the libraries we need as well as variables
var http = require('http'),
    express = require('express'),
    app = express(),
    fs = require('fs'),
    server = http.createServer(app);


// configure App headers - TODO: use what's necessary
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});

// configure static folders
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/templates", express.static(__dirname + "/public/templates"));
app.use("/", express.static(__dirname + "/public"));

// set up routing
// app.get('/', function (req, res) {
//     console.log(req.url);
//     if (req.url === "/") {
//         fs.readFile(__dirname + '/public/index.html',
//             function (err, data) {
//                 if (err) {
//                     res.writeHead(500);
//                     return res.end('Error loading ' + __dirname + 'index.html');
//                 }
//                 res.writeHead(200);
//                 res.end(data);
//             });
//     } else {
//         fs.readFile(__dirname+'/public/' + req.url, function (err, data) {
//             if (err) {
//                 res.writeHead(500);
//                 return res.end('Error loading ' + req.url);
//             }
//             res.writeHead(200);
//             res.end(data);
//         });
//     }
// });

app.listen(Number(process.env.PORT || 5000));
