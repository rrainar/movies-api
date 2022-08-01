const Router1 = require("@koa/router");
const router1 = new Router1();

const cinemasController = require("../controllers/cinemas-controller");

router1.get("/cinemas", cinemasController.getAllCinemas);
// router1.get("/cinemas/:id", cinemasController.getById);
// router1.delete("/cinemas/:id", cinemasController.deleteById);
// router1.post("/cinemas", cinemasController.create);


module.exports = router1;