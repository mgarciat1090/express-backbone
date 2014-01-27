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