(function(exports){

    if(typeof process !== 'undefined' && process.title === 'node'){
        this._ = require('./underscore-min');
    }

    _.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

    var Templates = {};

    Templates.Document = [
        "<h2>{{ name }} </h2>",
        "<ul>",
        "<li>Lines {{ lines }} </li>",
        "<li>Words {{ words }} </li>",
        "</ul>"
    ].join("");

    Templates.Documents = "<h1>{{ length }} Documents</h1>"

    for(var temp in Templates){
        if(Templates.hasOwnProperty(temp)){
            Templates[temp] = _.template(Templates[temp]);
        }
    }

    exports.Templates = Templates;

}).call(this, typeof window === 'undefined' ? exports : window)