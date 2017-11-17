var amqp = require('amqplib/callback_api');
//Connecting to a server
//To send, we must declare a queue for us to send to;
// then we can publish a message to the queue
amqp.connect('amqp://localhost',function(err,conn){
	conn.createChannel(function(err,ch){
		var q = 'hello'
		var msg = 'Hello New World!';
		ch.assertQueue(q,{durable:false});
		ch.sendToQueue(q, new Buffer(msg));
		console.log("[x] sent %s",msg);
	});
	setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
