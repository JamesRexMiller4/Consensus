const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
})

// this code determines our port from Heroku or 5000 by default
const PORT = process.env.PORT || 5000;
app.listen(PORT);