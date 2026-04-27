import { MemberModel } from '../models/memberModel.js';

export const MemberController = {
  // Mendapatkan semua daftar anggota
  async getAllMembers(req, res) {
    try {
      const members = await MemberModel.getAll();
      res.json(members);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Mendaftarkan anggota baru
  async registerMember(req, res) {
    try {
      const newMember = await MemberModel.create(req.body);
      res.status(201).json({
        message: "Anggota berhasil didaftarkan!",
        data: newMember
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async getMemberById(req, res) {
  try {
    const data = await MemberModel.getById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},

async updateMember(req, res) {
  try {
    const data = await MemberModel.update(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
},

async deleteMember(req, res) {
  try {
    const result = await MemberModel.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
};