const request = require('supertest');
const app = require('../index');

// --------------------------
// POST /login
// --------------------------
describe('🔐 POST /login', () => {
  it('✅ should login with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('❌ should fail login with wrong credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'wrong' });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Invalid credentials');
  });
});


describe('📦 CRUD /items', () => {
  let newItem;

  // --------------------------
  // GET /items
  // --------------------------
  it('✅ should return all items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // --------------------------
  // POST /items
  // --------------------------
  it('✅ should create a new item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: 'Item Test', description: 'Test Desc' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Item Test');
    newItem = res.body;
  });

   // --------------------------
   // PUT /items/:id
   // --------------------------
  it('✅ should update an item', async () => {
    const res = await request(app)
      .put(`/items/${newItem.id}`)
      .send({ name: 'Item Updated' });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Item Updated');
  });

  it('❌ should return 404 for updating non-existent item', async () => {
    const res = await request(app)
      .put('/items/99999')
      .send({ name: 'Does not exist' });

    expect(res.statusCode).toBe(404);
  });

  // --------------------------
  // DELETE /items/:id
  // --------------------------
  it('✅ should delete the item', async () => {
    const res = await request(app).delete(`/items/${newItem.id}`);
    expect(res.statusCode).toBe(200);
  });

  it('❌ should return 404 for deleting non-existent item', async () => {
    const res = await request(app).delete('/items/99999');
    expect(res.statusCode).toBe(404);
  });
});
