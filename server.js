
const express = require('express');
const app = express();

app.use('/email', require('./src/routes/email'));
app.use('/sms', require('./src/routes/sms'));

app.listen(8080, () => console.log('listening on port 8080'));
