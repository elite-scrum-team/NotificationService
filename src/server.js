require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// to parse json
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/metrics', async (req, res) => {
    await res.set('Content-Type', client.register.contentType);
    await res.end(client.register.metrics());
});

app.use('/api/v1/email', require('./routers/email'));
app.use('/api/v1/sms', require('./routers/sms'));
app.use('/api/v1/stats', require('./routers/stats'));

app.listen(8080, () => console.log('listening on port 8080'));
