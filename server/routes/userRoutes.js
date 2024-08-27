// All routes for users should be in here

const { Router } = require("express");

// User controller functions
const { example } = require("../controllers/userController");

const router = Router();

router.get("/", example);

module.exports = router;
