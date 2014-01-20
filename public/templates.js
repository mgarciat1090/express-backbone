_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;
var Templates = {};

Templates.Document = [
    "<h2>{{ name }} </h2>",
    "<ul>",
    "<li>Lines {{ lines }} </li>",
    "<li>Words {{ words }} </li>",
    "</ul>"
].join("");

Templates.Documents = "<h1>{{ length }} Documents"

for(var temp in Templates){
    if(Templates.hasOwnProperty(temp)){
        Templates[temp] = _.template(Templates[temp]);
    }
}