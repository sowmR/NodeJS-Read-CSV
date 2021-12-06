'use strict';
/**
 * This is the Entry point for the Nodejs application
 */
var http = require('http');
var url = require('url');
var express = require('express')
var app = express()

const readCsv = require('./readCSV')
var serverPort = 3002;

// CORS - Cross-Origin
var cors = require('cors');
app.use(cors);

app.get('/csv', async function (req, res) {
    console.log("inside the rest call", req.query);
    var q = url.parse(req.url, true).query;
    var fileN = req.query.filepath;
    console.log(fileN)
    
    let result = await readCsv.getCSVData(fileN)
    console.log(result);
    let payload = JSON.stringify(result, null, 2);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(payload);
  })

  //Create server
var server = http.createServer(app);

//Start Server
server.listen(serverPort, function() {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);    
});