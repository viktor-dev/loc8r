module.exports = {
	list: function(req, res) {
		res.render('list', {title: 'List'});
	},
	info: function(req, res) {
		res.render('info', {title: 'Info'});
	},
	review: function(req, res) {
		res.render('index', {title: 'Review'});
	}
};