require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");

// Imports
const userRoutes = require("./routes/userRoutes");
const cardRoutes = require("./routes/cardRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);

	next();
});

const MONGODB_URI = process.env.LOCAL_MONGODBURI;
const PORT = process.env.PORT || 4000;
connect(MONGODB_URI).then(() => {
	app.listen(3001, () => {
		console.log("Connected and Listening to PORT " + PORT);
	});
});
app.use("/users", userRoutes);
app.use("/cards", cardRoutes);
