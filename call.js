//引入库
var autobahn = require('autobahn');
//创建连接
var connection = new autobahn.Connection({
    url: 'ws://xxx.95.199.112:90/ws', //路由器的地址
    realm: 'realm1' //域（类似于Socket.io中的命名空间）
});

//监听连接
connection.onopen = function (session) {
    console.log('连接成功');
    //发布消息，第一个参数为主题，第二个参数为传递的参数，之后是接收调用的返回结果
    session.call('wamptopic', [2, 3]).then((res) => {
        console.log('结果', res)
    })
};
//打开连接
connection.open();