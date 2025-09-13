import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../middleware/authMiddleware.js';

const prisma = new PrismaClient();

// Criar ordem de compra
router.post('/', authMiddleware, async (req, res) => {
  const { buyerName, buyerEmail, cpfBuyer, items } = req.body;
  try {
    let total = 0;
    for (let item of items) total += item.priceCents;

    const order = await prisma.order.create({
      data: { buyerName, buyerEmail, cpfBuyer, totalCents: total, paid: false }
    });

    for (let item of items) {
      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          kitId: item.kitId,
          participantName: item.participantName,
          participantCPF: item.participantCPF,
          shirtSize: item.shirtSize,
          priceCents: item.priceCents
        }
      });
    }

    res.json({ message: 'Ordem criada', orderId: order.id });
  } catch (e) {
    res.status(400).json({ error: 'Erro ao criar ordem' });
  }
});

export default router;
