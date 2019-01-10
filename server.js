
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    await res.send('Anders liker kake');
});

app.listen(8080, () => console.log('listening on port 8080'));
