var express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')))

app.engine(
    '.html',
    exphbs.engine({
        defaultLayout: 'layout',
        extname: '.html',
    }),
);
app.set('view engine', '.html');


app.get('/api/test', (req,res,next) => {
  if(condition1) {
    next();
  } else {
    next();
  }},
  (req,res,next) => { console.log('req.path') next()},
  async (req, res) => {
    return res.status(200).json({data: 'After API call'});
});

app.get('/api/test', async (req, res) => {
  return res.status(200).json({data: 'After API call'});
});

app.patch('/api/test', async (req, res) => {
  return res.status(200).json({data: 'After API call'});
});

app.put('/api/test', async (req, res) => {
  return res.status(200).json({data: 'After API call'});
});


app.get('/*', (req, res) => {
    res.render('home');
});

module.exports = app;

ng-build --->
