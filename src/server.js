require('dotenv').config();

const express = require('express');
const app = express();

app.use('/email', require('./routes/email'));
app.use('/sms', require('./routes/sms'));

app.listen(8080, () => console.log('listening on port 8080'));
