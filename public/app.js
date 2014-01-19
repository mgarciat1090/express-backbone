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

var person = new Person({name : "John Doe", age: 30, twitter : "john_doe"});
var personView = new PersonView({model : person});
$("#main").append(personView.render().el)