var loader = new Loader();

var compile = function(data,opts){
	if (!opts) opts = {};
	var template = Handlebars.compile(data);
	var compiled = template(opts);
	return $(compiled).html();
};


loader.load("templates/index_template.html",function(data){
	var template = Handlebars.compile(data);
	var compiled = loader.compile(data,{name: "hello world"});

	$("body").html(compiled);
});