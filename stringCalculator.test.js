const request = require('supertest');
const app = require('./index');

describe('String Calculator API', () => {
  test('Should return 0 for an empty string', async () => {
    const response = await request(app).post('/add').send({ numbers: '' });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(0);
  });

  test('Should return the sum of two numbers', async () => {
    const response = await request(app).post('/add').send({ numbers: '1,2' });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(3);
  });

  test('Should handle newlines between numbers', async () => {
    const response = await request(app).post('/add').send({ numbers: '1\n2,3' });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(6);
  });

  test('Should support custom delimiters', async () => {
    const response = await request(app).post('/add').send({ numbers: '//;\n1;2' });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(3);
  });

  test('Should throw an error for negative numbers', async () => {
    const response = await request(app).post('/add').send({ numbers: '1,-2,-3' });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Negative numbers not allowed: -2, -3');
  });
});
