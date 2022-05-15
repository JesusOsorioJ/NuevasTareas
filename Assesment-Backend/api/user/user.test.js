const supertest = require('supertest');
const { app } = require('../../app');
const request = supertest(app);

describe('User testing', () => {
    const payload = {
        "email":"ejemplo@gmail.com",
        "password":"contraseñaejemplo"
    }
    describe('GET api/user', () => {
        test('should respond with status code 200', async () => {
            const response = await request.get('/api/user');
            expect(response.statusCode).toEqual(200);
        });
        test('should respond with one array', async () => {
            const response = await request.get('/api/user');
            expect(response.body).toEqual(expect.arrayContaining([expect.any(Object)]));
        });
    })

    describe('POST api/user', () => {
        test('should respond with status code 400', async () => {
            const response = await (await request.post('/api/user').send(payload));
            expect(response.statusCode).toEqual(400);
        });
        test('should respond with one text', async () => {
            const response = await (await request.post('/api/user').send(payload));
            expect(response.body).toEqual({ message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.' });
        });
    })
})