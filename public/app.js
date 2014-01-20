var Document = Backbone.Model.extend({});
var Documents = Backbone.Collection.extend({
    model : Document
});

var DocumentView = Backbone.View.extend({
    template : Templates.Document,
    render : function(){
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }

});

var DocumentsView = Backbone.View.extend({
    template : Templates.Documents,
    render : function(){
        this.el.innerHTML = this.template({ length: this.collection.length });
        this.collection.forEach(function(doc){
            this.el.appendChild(new DocumentView({ model : doc}).render().el);
        },this);
        return this;
    }
});

var documents = new Documents([ { name: "Doc A", lines: 100, words : 300 }, { name: "Doc B",  lines : 1000, words : 1235 } ]);

$("#main").append(new DocumentsView({ collection : documents}).render().el);