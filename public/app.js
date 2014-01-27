var v = new (Backbone.View.extend({
    el : "#main",
    render : function(msg){
        this.el.innerHTML = msg;
    }
}));

var R1 = Backbone.Router.extend({
    routes : {
        "" : "index",
        "first" : "first"
    },
    index : function(){
        v.render("R1, index");
    },
    first : function(){
        v.render("R1, first");
    }
});

var R2 = Backbone.Router.extend({
    routes : {
        "" : "index",
        "second" : "second"
    },
    index : function(){
        v.render("R2, index");
    },
    second : function(){
        v.render("R2, second");
    }
});

var r1 = new R1(),
    r2 = new R2();

Backbone.history.start({ pushState : true});
