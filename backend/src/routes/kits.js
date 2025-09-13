import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../middleware/authMiddleware.js';

const prisma = new PrismaClient();

// Criar kit para evento
router.post('/', authMiddleware, async (req, res) => {
  const { eventId, name, priceCents, quantity } = req.body;
  try {
    const kit = await prisma.kit.create({
      data: { eventId, name, priceCents, quantity }
    });
    res.json(kit);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar kit' });
  }
});

export default router;
