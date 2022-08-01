const cinemasModel = require("../models/cinemas-model");

function getAllCinemas(ctx) {
  ctx.body = moviesModel.movies;
}

function getCinemasById(ctx) {
  const index = ctx.request.params.id;

  if (Number(index) > cinemasModel.cinemas.length - 1) {
    ctx.status = 404;
    return;
  }

  ctx.body = cinemasModel.cinemas[index];
}

function deleteCinemasById(ctx) {
  const index = ctx.request.params.id;
  cinemasModel.cinemas.splice(index, 1);
  ctx.status = 204;
}

function createCinemas(ctx) {
  const text = ctx.request.body.text;

  if (!text || text === "") {
    ctx.status = 400;
    return;
  }

  cinemasModel.cinemas.push({ text });
  ctx.status = 201;
}

module.exports = {
  getAllCinemas,
  getCinemasById,
  deleteCinemasById,
  createCinemas,
};
