const express = require('express');
const path = require('path');
const logger = require('morgan');
const models = require('./models/sqlDB.js');

const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const dbRouter = require('./routes/dbRoutes.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
// use this specific views engine
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// this is for the css
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/', dbRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on Port: ${PORT}`);
    console.log(`${app.get('env')}`);
});
