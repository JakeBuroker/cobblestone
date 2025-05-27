const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


const PORT = process.env.PORT || 5001;

// Route Includes
const reviewsRouter = require('./routes/reviews.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/reviews', reviewsRouter);


// Server Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
