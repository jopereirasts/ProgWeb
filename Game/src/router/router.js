const express = require("express");
const mainController = require("../controllers/main");
const AreaController = require("../controllers/area");
const cursoController = require("../controllers/curso");
const router = express.Router();

//MainController
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);
router.get("/game", mainController.game);

//AreaController
router.get("/area",AreaController.index);

//CursoController
router.get("/curso",cursoController.index);
router.get("/curso/read/:id",cursoController.read);
router.get("/curso/create",cursoController.create);
router.post("/curso/create",cursoController.create);
router.get("/curso/update/:id",cursoController.update);
router.post("/curso/update/:id",cursoController.update);
router.delete("/curso/:id",cursoController.remove);


module.exports = router;