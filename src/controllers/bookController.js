import { BookModel } from '../models/bookModel.js';

export const BookController = {
  async getAllBooks(req, res) {
    try {
      const books = await BookModel.getAll();
      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createBook(req, res) {
    try {
      const newBook = await BookModel.create(req.body);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async getBookById(req, res) {
  try {
    const book = await BookModel.getById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},

async updateBook(req, res) {
  try {
    const book = await BookModel.update(req.params.id, req.body);
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
},

async deleteBook(req, res) {
  try {
    const result = await BookModel.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},
async getAllBooks(req, res) {
  try {
    const { title } = req.query;
    const books = await BookModel.getAll(title);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},
  async deleteLoan(req, res) {
  try {
    const { id } = req.params;

    const result = await LoanModel.deleteLoan(id);

    if (!result) {
      return res.status(404).json({ error: "Data loan tidak ditemukan" });
    }

    res.json({
      message: "Loan berhasil dihapus"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
};
