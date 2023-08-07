
const { Router } = require("express");

const authController = require("../controllers/authController");
const validateRequest=require("../middleware/joiValidation")
const router = Router();

router.post("/signup",validateRequest, authController.signup_post);


module.exports = router;
