'use strict';

const express = require('express');
const router = express.Router();
const Anime = require('../models/anime.js');

const animeInstance = new Anime();

router.get('/anime', getAllAnime);
router.get('/anime/:id', getOneAnime);
router.post('/anime', createAnimeCard);
router.put('/anime/:id', updateAnimeCard);
router.delete('/anime/:id', deleteAnime);

function getAllAnime(request, response) {
  let anime = animeInstance.get();
  response.status(200).json(anime);
}

function getOneAnime(request, response) {
  //   console.log('beforeParse', request.params.id);
  let id = parseInt(request.params.id); //in anime.js line 14 we put 3 equal so there is a string an a integer
  //   console.log('afterParse', id);
  let oneAnime = animeInstance.get(id);
  response.status(200).json(oneAnime);
}

function createAnimeCard(request, response) {
  //   console.log(request);
  //   console.log('request.body', request.body);
  //   response.status(201).send('hello');
  let record = request.body;
  let createCard = animeInstance.create(record);
  response.status(201).json(createCard);

}

function updateAnimeCard(request, response) {
  let id = parseInt(request.params.id);
  //   console.log('id', id);
  let obj = request.body;
  //   console.log(obj);
  let updateObject = animeInstance.update(id, obj);
  response.status(200).json(updateObject);
}

function deleteAnime(request, response) {
  let id = parseInt(request.params.id);
  animeInstance.delete(id);
  response.status(200).send('item deleted');
}





module.exports = router;