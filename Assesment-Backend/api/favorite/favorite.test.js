const supertest = require('supertest');
const { app } = require('../../app');
const request = supertest(app);

describe('Favorite testing', () => {
    const payload = {
        "name":"ListaDeFavoritos1",
        "favorites": [
            { "title":"favorite1","description":"description1","link":"link1"},
            { "title":"favorite2","description":"description2","link":"link2"},
        ] 
    }
    describe('GET /api/Favs', () => {
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/favs');
            expect(response.statusCode).toEqual(200);
        });
    })

    describe('GET /api/favs/:id', () => {
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/favs/62804ca9452747fcd8f9e008');
            expect(response.statusCode).toEqual(200);
        });
    })
    describe('GET /api/favs/email/:email', () => {
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/favs/email/hola@gmail.com');
            expect(response.statusCode).toEqual(200);
        });
    })

    describe('POST /api/favs', () => {
        test('should respond with status code 401', async () => {
            const response = await request.post('/api/favs').send(payload);
            expect(response.statusCode).toEqual(401);
        });
        test('should respond with User no login', async () => {
            const response = await request.post('/api/favs').send(payload);
            expect(response.body).toEqual("User no exist please login")
        });
    })
    
    describe('DELETE /api/favs/:id', () => {
        test('should respond with status code 401', async () => {
            const response = await request.delete('/api/favs/62804ca9452747fcd8f9e008').send(payload);
            expect(response.statusCode).toEqual(401);
        });
        test('should respond with User no login', async () => {
            const response = await request.delete('/api/favs/62804ca9452747fcd8f9e008').send(payload);
            expect(response.body).toEqual("User no exist please login")
        });
    })

    describe('PATCH /api/favs/:id', () => {
        test('should respond with status code 401', async () => {
            const response = await request.patch('/api/favs/62804ca9452747fcd8f9e008').send(payload);
            expect(response.statusCode).toEqual(401);
        });
        test('should respond with User no login', async () => {
            const response = await request.patch('/api/favs/62804ca9452747fcd8f9e008').send(payload);
            expect(response.body).toEqual("User no exist please login")
        });
    })
});
