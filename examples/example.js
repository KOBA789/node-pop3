var sys = require('sys');
var pop3 = require('../lib/pop3');

var auth = pop3.POPClient.authentication.apop("[gmail user]", "[gmail pass]");

var client = new pop3.POPClient(995, "pop.gmail.com", auth);
client.addListener("authenticate", function(){
	sys.puts("we have authenticated!");
	client.getNumberOfMessages(function(num){
		sys.puts("We have " + num + " messages");
		client.getMessage(num, function(msg){
			sys.puts("-\nMessage!\n\n" + msg)
			client.disconnect();
		});
	})
})
client.connect();
