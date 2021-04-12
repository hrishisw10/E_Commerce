const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        "msg": "Welcome to the best E-Commerce site in the universe."
    })
})
app.listen(5000, () => {
	console.log('Backend serving on port 5000...');
});
