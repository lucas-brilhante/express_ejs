const express = require('express');
const router = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(router);

app.listen(3333);