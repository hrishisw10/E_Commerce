const router = require('express').Router();

router.route('/').get((req, res) => {
	res.status(200).json({
		msg: 'All items here.',
	});
});

router.route('/:id').get((req, res) => {
	res.status(200).json({
		msg: 'Item with id here.',
	});
});

router.route('/').post((req, res) => {
	res.status(201).json({
		msg: 'Item created.',
	});
});

router.route('/:id').delete((req, res) => {
	res.status(200).json({
		msg: 'Item deleted.',
	});
});

module.exports = router;
