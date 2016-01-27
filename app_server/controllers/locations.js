module.exports = {
	list: function(req, res) {
		res.render('index', {title: 'List'});
	},
	info: function(req, res) {
		res.render('index', {title: 'Info'});
	},
	review: function(req, res) {
		res.render('index', {title: 'Review'});
	}
};