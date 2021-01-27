const router = require("express").Router();
const employeeController = require("../controller/employee");


router.get("/",employeeController.view);

router.post("/",employeeController.create);

router.delete("/:id",employeeController.delete);



module.exports = router;