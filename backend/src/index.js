const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/events', require('./routes/events'));
app.use('/api/kits', require('./routes/kits'));
app.use('/api/orders', require('./routes/orders'));

app.listen(3333, () => console.log('Backend rodando na porta 3333'));
