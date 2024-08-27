const { Schema, model } = require("mongoose");

const cardSchema = new Schema({
	creatorId: {
		type: String,
		required: [true, "This field is required"],
		unique: true,
		lowercase: true,
	},
	question: {
		type: String,
		required: [true, "This field is required"],
		minlength: [4, "Question must be at least 1 character"],
	},
	answer: {
		type: String,
		required: [true, "This field is required"],
		minlength: [4, "Answer must be at least 1 character"],
	},
	subject: {
		type: String,
		required: [true, "This field is required"],
		minlength: [4, "Subject must be at least 1 character"],
	},
	difficulty: {
		type: String,
		enum: ["Very Easy", "Easy", "Hard", "Very Hard"],
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const Card = model("card", cardSchema);
module.exports = Card;
