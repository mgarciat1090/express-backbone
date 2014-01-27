var User = Backbone.Model.extend({});

var Users = Backbone.Collection.extend({
    model : User
});

var SOCKET = io.connect();
Backbone.sync = function(method, model, options){
    var data,
    success = function(data){
        if(options.success) options.success(data);
        model.trigger("sync",model,data,options);
    }
    switch(method){
        case "create":
        case "update":
            data = model.toJSON();
            break;
        case "read":
        case "delete":
            data = { id: model.get('id')};
            break;
    }

    SOCKET.emit(method,data,success);
}

var users = new Users();
