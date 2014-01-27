var v = new (Backbone.View.extend({
    el : "#main",
    render : function(msg){
        this.el.innerHTML = msg;
    }
}));

var Router = Backbone.Router.extend({
    routes : {
        "users" : "showAllUsers",
        "users/new" : "createUser",
        "users/:id" : "showUser",
        "*other" : "defaultAction"
    },
    initialize : function(){
        this.route(/^pages\/(\d+)\/(\d+)/,"showPages");
    },
    data : function(){
        v.render("data");
    },
    showAllUsers : function(){
        console.log('show all users');
    },
    showPages : function(from,to){
        v.render("showing pages " + from + " to " + to);
    },
    createUser : function(){
        v.render("creating a user");
    },
    showUser : function(id){
        v.render("showing user #" + id);
    },
    defaultAction : function(other){
        v.render(other);
    }
});

var r = new Router();

r.on('route:createUser',function(){
    v.el.innerHTML += "creating a user from an event callback";
})

Backbone.history.start({ pushState : true})
