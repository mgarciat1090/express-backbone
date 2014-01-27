var express = require('express'),
http = require('http'),
path = require('path');

var app = express();

app.configure(function(){
    //app.use(app.router);
    app.use(express.static(path.join(__dirname,'public')));
});


app.get('/',function(req,res){
    res.render('index.jade');
});


var people = [
    {name : 'Andrew', id : 1},
    {name : 'Paul', id : 2}
],
    id = 3;

var server = http.createServer(app),
    io = require("socket.io").listen(server);

io.sockets.on('connection',function(socket){
    socket.on('create',function(data,res){
        data.id = id++;
        people.push(data);
        res(data);
    });
    socket.on('read',function(data,res){
        res((data.id) ? people[data.id - 1] : people);
    });

    socket.on('update',function(data,res){
        people[data.id - 1] = data;
        res(data);
    });

    socket.on('delete',function(data,res){
        delete people[data.id - 1];
        res (true);
    })

});

server.listen(3000);