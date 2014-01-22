var express = require('express'), http = require('http'), path = require('path');

var app = express();

app.configure(function(){
    app.use(express.static(path.join(__dirname,'public')));
});

app.get('/', function(req,res){
    res.render('index.jade');
});

var compiledTemplates = null;
app.get('/templates.js',function(req,res){
    if(!compiledTemplates){
        var Templates = require('./public/templates').Templates;
        compiledTemplates = "var Templates = {};\n\n";
        for(var temp in Templates){
            if(Templates.hasOwnProperty(temp)){
                compiledTemplates += "Templates." + temp + " = " + templates[temp].source + ";\n\n";
            }
        }
    }
    res.type("application/javascript").send(compiledTemplates)
})


http.createServer(app).listen(3000);
