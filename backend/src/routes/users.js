import express from 'express';
import { userService } from '../services/userService.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// CREATE
router.post('/', authMiddleware, async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ todos
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ por ID
router.get(':id', authMiddleware, async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put(':id', authMiddleware, async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete(':id', authMiddleware, async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
