var content = document.querySelector('.js-app_content');
var View = require('./view');

var database = {
	title: 'This is the Links page'
};

module.exports = function() {
	app.view = View(database);

	app.view
		.render()
		.inject(content);
};