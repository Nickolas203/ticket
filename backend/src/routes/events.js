import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../middleware/authMiddleware.js';

const prisma = new PrismaClient();

// Listar eventos
router.get('/', async (req, res) => {
  const events = await prisma.event.findMany({ include: { kits: true } });
  res.json(events);
});

// Criar evento (organizador)
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, city, state, startAt, imageUrl, terms } = req.body;
  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        city,
        state,
        startAt: new Date(startAt),
        imageUrl,
        terms,
        organizerId: req.userId
      }
    });
    res.json(event);
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar evento' });
  }
});

export default router;
