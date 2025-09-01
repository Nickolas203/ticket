const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = require('../middleware/authMiddleware');

// Listar eventos
router.get('/', async (req, res) => {
  const events = await prisma.event.findMany({ include: { kits: true } });
  res.json(events);
});

// Criar evento (organizador)
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, city, state, startAt, imageUrl, terms } = req.body;
  try{
    const event = await prisma.event.create({
      data: {
        title, description, city, state, startAt: new Date(startAt),
        imageUrl, terms, organizerId: req.userId
      }
    });
    res.json(event);
  }catch(e){
    res.status(400).json({ error: 'Erro ao criar evento' });
  }
});

module.exports = router;
