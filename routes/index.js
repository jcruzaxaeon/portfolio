

const express = require('express');
// const { render } = require('pug');
const router = express.Router();
// const {projects} = require('../data/data.json'); // Requires a `projects`-key in .json-file
const data = require('../data/data.json');

router.get('/', (req, res) => {
   res.locals.projects = data.projects;
   res.render('index');
   // res.render('index', {key1, key2}) // key1, key2 directly useable as a variable
});

router.get('/about', (req, res) => {
   res.render('about');
});

router.get('/project/:id', (req, res) => {
   // e.g. domain.com/project/1
   res.locals.projects = data.projects;
   res.locals.i = req.params.id - 1;
   
   res.render('project');
});

module.exports = router;

