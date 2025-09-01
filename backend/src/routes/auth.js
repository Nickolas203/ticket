const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Registro
router.post('/register', async (req, res) => {
  const { name, email, password, cpf, age, isOrganizer } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashed, cpf, age, isOrganizer },
    });
    res.json({ message: 'Usuário criado', userId: user.id });
  } catch(e) {
    res.status(400).json({ error: 'Email já existe' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if(!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  const valid = await bcrypt.compare(password, user.password);
  if(!valid) return res.status(400).json({ error: 'Senha inválida' });
  const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '7d' });
  res.json({ token, userId: user.id, name: user.name });
});

module.exports = router;
