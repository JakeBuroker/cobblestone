const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

let cachedReviews = null;
let lastFetched = 0;
const CACHE_DURATION_MS = 1000 * 60 * 60; // 1 hour

router.get('/', async (req, res) => {
  const now = Date.now();

  // If cache exists and is fresh, return it
  if (cachedReviews && now - lastFetched < CACHE_DURATION_MS) {
    return res.json(cachedReviews);
  }

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id: process.env.PLACE_ID,
        fields: 'name,rating,reviews',
        key: process.env.API_KEY
      }
    });

    const result = response.data.result;

    if (!result || !result.reviews) {
      throw new Error('No reviews found in Google response');
    }

    cachedReviews = result.reviews.slice(0, 3);
    lastFetched = now;

    res.json(cachedReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

router.get('/dev', (req, res) => {
  const fakeReviews = [
    {
      author_name: 'Dev Jake',
      rating: 5,
      text: 'Love testing this locally — feels like the real thing!',
    },
    {
      author_name: 'React Wizard',
      rating: 4,
      text: 'Nice layout. Fast and responsive!',
    },
    {
      author_name: 'Coffee Critic',
      rating: 5,
      text: 'Even fake reviews can’t stop me from praising the mocha!',
    },
  ];

  res.json(fakeReviews);
});


module.exports = router;
