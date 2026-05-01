import { LoanModel } from '../models/loanModel.js';

export const LoanController = {
  async createLoan(req, res) {
    const { book_id, member_id, due_date } = req.body;
    try {
      const loan = await LoanModel.createLoan(book_id, member_id, due_date);
      res.status(201).json({
        message: "Peminjaman berhasil dicatat!",
        data: loan
      });
    } catch (err) {
      // Jika stok habis atau ID salah, kirim status 400 (Bad Request)
      res.status(400).json({ error: err.message });
    }
  },

  async getLoans(req, res) {
    try {
      const loans = await LoanModel.getAllLoans();
      res.json(loans);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async returnBook(req, res) {
  try {
    const result = await LoanModel.returnBook(req.params.id);
    res.json({
      message: result.message
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
},

async getTopBorrowers(req, res) {
  try {
    const data = await LoanModel.getTopBorrowers();

    res.json({
      message: "Top 3 peminjam berhasil diambil",
      data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},
  async updateLoan(req, res) {
    try {
      const { id } = req.params;
     const { due_date } = req.body;

      const result = await LoanModel.updateLoan(id, due_date);

      if (!result) {
      return res.status(404).json({ error: "Data loan tidak ditemukan" });
      }

     res.json({
       message: "Loan berhasil diupdate",
       data: result
     });

    } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

};