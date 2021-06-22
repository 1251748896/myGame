/**
 * 1.在source目录下执行：node server.js，开启服务端监听
 * 2.运行index.html：每次网页关闭，需要重新执行步骤1
 * 
 * 3.注意：步骤1和2的顺序不能变动
 */

var ws = require("nodejs-websocket"); //引入websocket模块  
console.log("开始建立连接..."); //后台打印状态信息  
var server = ws.createServer(function(connect) { //创建一个新连接  
    connect.on("text", function(msg) { //接收触发事件  
        console.log("收到的消息是：" + msg); //接收到新消息之后在后台打印出来  
        if (msg) { //如果消息不是空，将接收到的消息发送给客户端  
            connect.send(' Hello, 姜波');
        }
    });
}).listen(8088);