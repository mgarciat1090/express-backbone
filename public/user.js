define(["backbone","jquery","underscore"],function(BB,$,_){
    var User = { Views : {} };
    User.Model = BB.Model.extend({});
    User.Collection = BB.Collection.extend({
        model : User.Model
    });
    User.Views.ModelView = BB.View.extend({
        tagName : "li",
        render : function(){
            this.el.innerText = this.model.get("name");
            return this;
        }
    });

    User.Views.CollectionView = BB.View.extend({
        tagName : 'ul',
        render : function(){
            this.collection.forEach(function(model){
                this.el.appendChild(new User.Views.ModelView({ model : model }).render().el);
            },this);
            return this;
        }
    });

    return User;

});