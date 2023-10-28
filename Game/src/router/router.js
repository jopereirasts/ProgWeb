const express = require("express");
const mainController = require("../controllers/main");
const AreaController = require("../controllers/area");
const router = express.Router();

//MainController
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);
router.get("/game", mainController.game);

//AreaController
router.get("/area",AreaController.index);


module.exports = router;