'use strict';


const server = require('../scr/server.js');
const supertest = require('supertest');

const mockServer = supertest(server.app);


describe('testing the server', () => {
  it('Handles bad route', async() => {
    const responseBad = await mockServer.get('/bad');
    expect(responseBad.status).toEqual(404);
  });

  it('be able to post a new Anime', async() => {
    let anime = await mockServer.post('/anime').send({
      name: 'naruto',
      level: 17,
    });
    expect(anime.body.record.name).toEqual('naruto');
    expect(anime.body.record.level).toEqual(17);
    expect(anime.status).toEqual(201);
  });

  it('to be able to get all anime', async() => {
    let getAnime = await mockServer.get('/anime');
    console.log('body', getAnime.body[0].record.name);
    expect(getAnime.body[0].record.name).toEqual('naruto');
    expect(getAnime.body[0].record.level).toEqual(17);
    expect(getAnime.status).toEqual(200);
  });

  it('to be able to get one anime', async() => {
    let getAnime = await mockServer.get('/anime/1');
    // console.log('why pls why ', getAnime.body);
    expect(getAnime.body.record.name).toEqual('naruto');
    expect(getAnime.status).toEqual(200);

  });

  it('Update a anime using PUT', async() => {
    let animeUpdate = await mockServer.put('/anime/1').send({
      name: 'yasou',
      level: 7,
    });
    expect(animeUpdate.body.record.name).toEqual('yasou');
    expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeUpdate.status).toEqual(200);
  });

  it('Destroy a anime using DELETE', async() => {
    let animeDeleted = await mockServer.delete('/anime/1');

    expect(animeDeleted.res.text).toEqual('item deleted');
    // expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeDeleted.status).toEqual(200);
  });
  // 
  it('be able to post a new manga', async() => {
    let anime = await mockServer.post('/manga').send({
      name: 'ATO',
      level: 36,
    });
    expect(anime.body.record.name).toEqual('ATO');
    expect(anime.body.record.level).toEqual(36);
    expect(anime.status).toEqual(201);
  });


  it('to be able to get all manga', async() => {
    let getAnime = await mockServer.get('/manga');
    console.log('first body', getAnime.body);
    expect(getAnime.body[0].record.name).toEqual('ATO');
    expect(getAnime.body[0].record.level).toEqual(36);
    expect(getAnime.status).toEqual(200);
  });

  it('to be able to get one manga', async() => {
    let getAnime = await mockServer.get('/manga/1');
    // console.log('why pls why ', getAnime.body);
    expect(getAnime.body.record.name).toEqual('ATO');
    expect(getAnime.status).toEqual(200);

  });

  it('Update a manga using PUT', async() => {
    let animeUpdate = await mockServer.put('/manga/1').send({
      name: 'yasou',
      level: 7,
    });
    expect(animeUpdate.body.record.name).toEqual('yasou');
    expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeUpdate.status).toEqual(200);
  });

  it('Destroy a manga using DELETE', async() => {
    let animeDeleted = await mockServer.delete('/manga/1');

    expect(animeDeleted.res.text).toEqual('item deleted');
    // expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeDeleted.status).toEqual(200);
  });

});