var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var apis = require('./routes/apis');
var index = require('./routes/index');

// 建立一個 Express 伺服器
var app = express();

// 設定public目錄為靜態網頁
app.use(express.static(path.join(__dirname, 'public')));

// 設定bodyParser支援application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	
	// 不用在bodyParser處理Query String
	extended: false 
}));

app.use('/apis', apis);
app.use('/', index);

var server = app.listen(9000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('BuildMachine Listening at http://%s:%s', host, port);
});

