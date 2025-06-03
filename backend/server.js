require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const preRegRoutes = require('./routes/preRegistrationRoutes');
const registrationRoutes = require('./routes/registrationRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/prereg', preRegRoutes);
app.use('/api/register', registrationRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
