'use strict';


const server = require('../scr/server.js');
const supertest = require('supertest');

const mockServer = supertest(server.app);


describe('testing the server', () => {
  it('Handles bad route', async() => {
    const response = await mockServer.get('/bad');
    expect(response.status).toEqual(404);
  });

  it('Handles bad method', async() => {
    const response = await mockServer.post('/');
    expect(response.status).toEqual(404);
  });
  it('be able to post a new thing', async() => {
    let anime = await mockServer.post('/anime').send({
      name: 'naruto',
      level: 17,
    });
    expect(anime.body.record.name).toEqual('naruto');
    expect(anime.body.record.level).toEqual(17);
    expect(anime.status).toEqual(201);
  });

  //   it('to be able to get all item', async() => {
  //     let getAnime = await mockServer.get('/anime');

  //     // console.log('getAnime', getAnime.Response.res);
  //     expect(getAnime).toEqual('naruto');
  //     // expect(getAnime.body.record.level).toEqual(17);
  //     // expect(getAnime.status).toEqual(201);
  //   });

  //   it('to be able to get one item', async() => {
  //     let getAnime = await mockServer.get('/anime/:id').send({ id: 1 });
  //     let array = getAnime.res.text;

  //     expect(array).toEqual("[{ 'id': 1, 'record': { 'name': 'naruto', 'level': 17 } }]");
  //     // expect(getAnime.body.record.level).toEqual(17);
  //     // expect(getAnime.status).toEqual(201);
  //   });

  it('Update a record using PUT', async() => {
    let animeUpdate = await mockServer.put('/anime/1').send({
      name: 'yasou',
      level: 7,
    });
    expect(animeUpdate.body.record.name).toEqual('yasou');
    expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeUpdate.status).toEqual(200);
  });

  it('Destroy a record using DELETE', async() => {
    let animeDeleted = await mockServer.delete('/anime/1');

    expect(animeDeleted.res.text).toEqual('item deleted');
    // expect(animeUpdate.body.record.level).toEqual(7);
    expect(animeDeleted.status).toEqual(200);
  });

});