import { pool } from '../config/db.js';

export const CategoryModel = {
  async getAll() {
    const result = await pool.query('SELECT * FROM categories ORDER BY name ASC');
    return result.rows;
  },
  async create(name) {
    const query = 'INSERT INTO categories (name) VALUES ($1) RETURNING *';
    const result = await pool.query(query, [name]);
    return result.rows[0];
  },
  async getById(id) {
  const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
  return result.rows[0];
},

async update(id, name) {
  const result = await pool.query(
    'UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
},

async delete(id) {
  await pool.query('DELETE FROM categories WHERE id = $1', [id]);
  return { message: "Category berhasil dihapus" };
},
async getAll(name) {
  let query = 'SELECT * FROM categories';
  let values = [];

  if (name) {
    query += ' WHERE name ILIKE $1';
    values.push(`%${name}%`);
  }

  query += ' ORDER BY name ASC';

  const result = await pool.query(query, values);
  return result.rows;
}
};
