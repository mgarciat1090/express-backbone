var v = new (Backbone.View.extend({
    el : "#main",
    render : function(msg){
        this.el.innerHTML = msg;
    }
}));

var Router = Backbone.Router.extend({
    routes : {
        "users/new" : "createUser",
        "users/:id" : "showUser"
    },
    initialize : function(){
        this.route(/^pages\/(\d+)\/(\d+)/,"showPages");
    },
    showPages : function(from,to){
        v.render("showing pages " + from + " to " + to);
    },
    createUser : function(){
        v.render("creating a user");
    },
    showUser : function(id){
        v.render("showing user #" + id);
    }
});

var r = new Router();

r.on('route:createUser',function(){
    v.el.innerHTML += "creating a user from an event callback";
})

Backbone.history.start({ pushState : true})