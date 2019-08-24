//引入库
var autobahn = require('autobahn');
//创建连接
var connection = new autobahn.Connection({
   url: 'ws://xxx.95.199.112:90/ws', //路由器的地址
   realm: 'realm1' //域（类似于Socket.io中的命名空间）
});
//监听连接
connection.onopen = function (session) {
   function onEvent(args) {
      var msg = args[0];
      console.log(" received: " + msg);
   }
   //订阅主题，第一个参数是主题，第二个参数是接收信息的回调函数
   session.subscribe('wamptopic', onEvent)
};
//打开连接
connection.open();