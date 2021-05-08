'use strict';

const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const Manga = require('../models/anime.js');

const mangaInstance = new Manga();

router.get('/manga', getAllManga);
router.get('/manga/:id', getOneManga);
router.post('/manga', createMangaCard);
router.put('/manga/:id', updateMangaCard);
router.delete('/manga/:id', deleteManga);

function getAllManga(request, response) {
  let anime = mangaInstance.get();
  response.status(200).json(anime);
}

function getOneManga(request, response) {

  let id = parseInt(request.params.id); //in anime.js line 14 we put 3 equal so there is a string an a integer

  let oneAnime = mangaInstance.get(id);
  response.status(200).json(oneAnime);
}

function createMangaCard(request, response) {

  let record = request.body;
  let createCard = mangaInstance.create(record);
  response.status(201).json(createCard);

}

function updateMangaCard(request, response) {
  let id = parseInt(request.params.id);

  let obj = request.body;

  let updateObject = mangaInstance.update(id, obj);
  response.status(200).json(updateObject);
}

function deleteManga(request, response) {
  let id = parseInt(request.params.id);
  mangaInstance.delete(id);
  response.status(200).send('item deleted');
}



module.exports = router;