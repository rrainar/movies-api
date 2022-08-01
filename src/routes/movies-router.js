const Router = require("@koa/router");
const router = new Router();

const moviesController = require("../controllers/movies-controller");

router.get("/movies", moviesController.getAllMovies);
router.get("/cinemas", moviesController.getAllCinemas);

router.get("/movies/:id", moviesController.getById);
router.delete("/movies/:id", moviesController.deleteById);
router.post("/movies", moviesController.create);


module.exports = router;