
templates.listItem = function(data) {
	return '<input class="list-item_checkbox" type="checkbox" />' +
	data.text +
	'<div class="list-item_close-button">×</div>';
};