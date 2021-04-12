const express = require('express');
const cors = require('cors');
const itemRouter = require('./Items/ItemRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json({
		msg: 'Welcome to the best E-Commerce site in the universe.',
	});
});

app.use('/items', itemRouter);

app.listen(5000, () => {
	console.log('Backend serving on port 5000...');
});
