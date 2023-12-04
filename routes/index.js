

/*
# Portfolio
- `originalFileContent`: New
- `sourceAuthor`: jcruz
- `title`: Dynamic-Site Portfolio
- `description`: Team Treehouse Unit Project 6. Server-side JavaScript practice.
- `majorVersionCode`: initial
- `gitHeirarchy`: git submodule for `axaeon.com`
- `projectCode`: 6tth
- `author`: jcruz
- `email`: jcruz@axaeon.com
- `centralRepo`: https://github.com/jcruzaxaeon/portfolio.git
- `branch`: main
- `org`: Team Treehouse
- `orgType`: Code Academy
- `certification`: Fullstack JavaScript Techdegree
- `lesson`: Unit Project 6
- `topics`: Node.js, Express, Pug
--------------------------------------------------------------------------------------------------*/

const express = require('express');
const router = express.Router();
// const {projects} = require('../data/data.json'); // Requires a `projects`-key in .json-file
const data = require('../data/data.json');

router.get('/', (req, res) => {
   res.locals.projects = data.projects;
   res.render('index');
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

