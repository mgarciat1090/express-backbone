var Person = Backbone.Model.extend({});

var PersonView = Backbone.View.extend({
    template: _.template($("#personView").html()),
    render : function(){
        this.el.innerHTML = this.template({ person: this.model.toJSON(),twitterLink : this.twitterLink });
        return this;
    },
    twitterLink: function(handle){
        return "<a href='http://twitter.com/" + handle + "'>@" + handle + "</a>";
    }
});

var template = function(templateString){
    var templateFn = _.template(templateString);
    return function(context){
        return templateFn(_.extend({},template.fn,context));
    }

}
template.fn = {};

template.fn.twitterLink = function(handle){
    return "<a href='http://twitter.com/" + handle + "'>@" + handle + "</a>";
}



PersonView = Backbone.View.extend({
    template: template($("#personView").html()),
    render : function(){
        console.log("new PersonView");
        this.el.innerHTML = this.template({ person: this.model.toJSON() });
        return this;
    }
});

var People = Backbone.Collection.extend({
    model : Person
});

var PeopleView = Backbone.View.extend({
    template : _.template($("#peopleView").html()),
    render : function(){
        this.el.innerHTML = this.template();
        this.collection.forEach(function(model){
            this.el.appendChild(new PersonView({ model : model }).render().el);
        },this);
        return this;
    }
});

var people = new People();
people.add({ name: "john Doe",age:30,twitter: "john_doe"});
people.add({ name: "jane Doe",age:25,twitter: "jane_doe"});
people.add({ name : "Sally White",age : 35,twitter : "sally_white"});

var peopleView = new PeopleView({collection : people });

$("#main").append(peopleView.render().el)