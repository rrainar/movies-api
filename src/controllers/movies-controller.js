const moviesModel = require("../models/movies-model");
const cinemasModel = require("../models/cinemas-model");

function getAllMovies(ctx) {
  ctx.body = moviesModel.movies;
}

function getAllCinemas(ctx) {
  ctx.body = cinemasModel.cinemas;
}

function getById(ctx) {
  const index = ctx.request.params.id;

    if(Number(index) > moviesModel.movies.length - 1) {
    ctx.status = 404;
    return;
  }

  ctx.body = moviesModel.movies[index];
}

function deleteById(ctx) {
  const index = ctx.request.params.id;
  moviesModel.movies.splice(index, 1);
  ctx.status = 204;
}

function create(ctx) {
  const text = ctx.request.body.text;

  if (!text || text === "") {
    ctx.status = 400;
    return;
  }

  moviesModel.movies.push({ text });
  ctx.status = 201;
}




module.exports = { getAllMovies, getAllCinemas, getById, deleteById, create };
