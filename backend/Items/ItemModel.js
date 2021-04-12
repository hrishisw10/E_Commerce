const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
	{
		itemId: {
			type: uuidv4(),
			required: true,
		},
		itemName: {
			type: String,
			required: true,
		},
		itemCategory: {
			type: String,
		},
		itemPrice: {
			type: Number,
			required: true,
		},
		itemQuantity: {
			type: Number,
			required: true,
		},
		itemImage: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
