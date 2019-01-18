const StatisticsController = require('../controllers/StatisticsController');

const express = require('express');

const router = express.Router();

router.get('/a.pdf', async (req, res) => {
    await StatisticsController.send('google.com', res);
});

module.exports = router;
