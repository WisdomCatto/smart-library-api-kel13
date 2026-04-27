import { CategoryModel } from '../models/categoryModel.js';

export const CategoryController = {
  async getCategories(req, res) {
    try {
      const categories = await CategoryModel.getAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async addCategory(req, res) {
    try {
      const category = await CategoryModel.create(req.body.name);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async getCategoryById(req, res) {
  try {
    const data = await CategoryModel.getById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},

async updateCategory(req, res) {
  try {
    const data = await CategoryModel.update(req.params.id, req.body.name);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
},

async deleteCategory(req, res) {
  try {
    const result = await CategoryModel.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},
async getCategories(req, res) {
  try {
    const { name } = req.query;
    const categories = await CategoryModel.getAll(name);
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
};