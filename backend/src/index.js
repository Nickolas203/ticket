import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import eventRoutes from './routes/events.js';
import kitRoutes from './routes/kits.js';
import orderRoutes from './routes/orders.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/kits', kitRoutes);
app.use('/api/orders', orderRoutes);

app.listen(3333, () => console.log('Backend rodando na porta 3333 🚀'));
