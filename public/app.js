define(['backbone','user'],function(BB,User){
    var App = {};
    App.AppView = BB.View.extend({
        el : "#main",
        initialize : function(){
            this.users = new User.Collection([
                {name : "Andrew"},
                {name : "Paul"},
                {name : "David"}
                ]);
        },
        render : function(){
            this.el.appendChild(new User.Views.CollectionView({ collection : this.users }).render().el);
        }

    });

    return App;
})