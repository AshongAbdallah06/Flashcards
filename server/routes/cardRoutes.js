// All routes for cards should be in here

const { Router } = require("express");

// Card controller functions
const { example } = require("../controllers/cardController");

const router = Router();

router.get("/", example);

module.exports = router;
