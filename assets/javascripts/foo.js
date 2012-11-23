var loader = new Loader();

loader.load("templates/index_template.html",function(data){
	var template = Handlebars.compile(data);
	var compiled = loader.compile(data,{name: "hello world"});

	$("body").html(compiled);
});