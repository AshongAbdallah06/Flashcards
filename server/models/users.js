const { Schema, model } = require("mongoose");
const { isEmail, isStrongPassword } = require("validator");

const userSchema = new Schema({
	username: {
		type: String,
		required: [true, "This field is required"],
		unique: true,
		lowercase: true,
		minlength: [4, "username must be at least 4 characters"],
	},
	email: {
		type: String,
		required: [true, "This field is required"],
		unique: true,
		lowercase: true,
		minlength: [8, "username must be at least 8 characters"],
		validate: [isEmail, "Please enter a valid email address"],
	},
	password: {
		type: String,
		required: [true, "This field is required"],
		validate: [isStrongPassword, "Please enter a strong password"],
	},
});

const User = model("user", userSchema);
module.exports = User;
