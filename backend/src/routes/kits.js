const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = require('../middleware/authMiddleware');

// Criar kit para evento
router.post('/', authMiddleware, async (req, res) => {
  const { eventId, name, priceCents, quantity } = req.body;
  try{
    const kit = await prisma.kit.create({
      data: { eventId, name, priceCents, quantity }
    });
    res.json(kit);
  }catch(e){
    res.status(400).json({ error: 'Erro ao criar kit' });
  }
});

module.exports = router;
