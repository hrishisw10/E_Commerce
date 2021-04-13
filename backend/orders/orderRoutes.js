const router = require('express').Router();

router.route('/').get((req, res) => {
	res.status(200).json({
		msg: 'Get details of order',
	});
});

router.route('/:id').post((req, res) => {
    let order = {
        _id: "k",
        total: 'amt',
        delivery:'charges',
        created: 'added',
        products: 'product'
      };
    res.status(201).json({
        order
	});
});

router.route('/').post((req, res) => {
	res.status(201).json({
		msg: 'Your order has been placed successfully!',
	});
});

router.route('/:id').delete((req, res) => {
	res.status(200).json({
		msg: 'Order Canceled.',
	});
});

module.exports = router;