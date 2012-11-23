var Loader = function(){
	var self = this;


	// create xhr obj and load from str and passed it to callback function.

	this.load = function(tmpl,callback){
		var lastDir = location.pathname.split("/").pop();
		var dirList = location.pathname.split("/").filter(function(dir){
			return lastDir !== dir;
		},this);


		var tmpls = tmpl.split("/");
		tmpls.map(function(dir){
			dirList.push(dir);
		},this);

		var url = location.protocol +  dirList.join("/");


		var req = new XMLHttpRequest();
		req.open("GET",url);
		req.onreadystatechange = function(evt){
			if (req.readyState === 4 && req.status === 200){
				callback(req.responseText);
			}
		};

		req.send();

	};


	/**
	 * it require jQuery,Handlebar plugin
	 * @param data
	 * @param opts
	 * @return {*|jQuery element}
	 */
	this.compile = function(data,opts){
		if (!opts) opts = {};
		var template = Handlebars.compile(data);
		var compiled = template(opts);
		return $(compiled).html();
	};













};
