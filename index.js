const Koa = require ("koa");
const app = new Koa();

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = require("./src/routes/movies-router");
app.use(router.routes());

const router1 = require("./src/routes/cinemas-router");
app.use(router1.routes());

app.listen(4000, () => 
console.log("Server is running at http://localhost:4000")
);