const express= require("express");
const router= express.Router();


const controller = require("../controllers/productos.controller");
router.get("/",controller.index );

//para obtener el id en apis:  +req.params.id
router.get("/:id",controller.show );

module.exports= router;