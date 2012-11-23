var loader = new Loader();

var Router = Backbone.Router.extend({
	routes:{
		"":"index"
	},

	index:function(){
		loader.load("templates/index_template.html",function(data){
			var template = Handlebars.compile(data);
			var compiledTemplate = loader.compile(data,{name: "#index template"});
			$("#main").html(compiledTemplate);
		});
	}
});




var router =  new Router();
Backbone.history.start();
