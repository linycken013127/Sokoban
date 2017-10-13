'use strict';

let http = require('http');

http.createServer((request, response) => {

let fs = require('fs')
//file system檔案系統

fs.readFile('../htdocs/index.html', (err, data) => {
//一個.代表當前資料夾，兩個..代表上一層資料夾
//相對路徑由現在位置去尋找檔案在哪
 response.writeHead(200, {
 'Content-Type': 'text/html'
 });

 response.write(data);

 response.end();
 });
 }).listen(8088);

 // log message to Console
 console.log(' 伺服器啟動，連線 url: http://127.0.0.1:8088/');
/*'use strict';

let http = require('http');

http.createServer((require, response) => {

let fs = require('fs')

  fs.readFile('../htdocs/index.html', (err,data) => {

    response.writeHead(200, {
      'Content-Type': 'text/html'
    });

    response.write(data);

    response.end();

  });
}).listen(8088);

console.log('伺服器啟動，連線 url:  http://127.0.0.1:8088/');*/
