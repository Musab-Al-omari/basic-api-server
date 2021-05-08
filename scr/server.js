'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/looger.js');
const animeManga = require('./routes/manga.js');
const animeRouter = require('./routes/anime.js');
// global middleware
app.use(express.json());
app.use(logger);
// app.use(express.urlencoded({ extended: true }));
app.use(animeManga);
app.use(animeRouter);
app.use(notFoundHandler);
app.use(errorHandler);

app.post('/test', (req, res) => {
  res.send('what!!!');
});

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`iam on ${PORT}`);
  });
}


module.exports = {
  start: start,
  app: app,
};