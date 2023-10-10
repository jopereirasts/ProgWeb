const express = require("express");
const mainController = require("../controllers/main");
const router = express.Router();

router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/profs", mainController.profs);



module.exports = router;