

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



// Globals
////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const path = require('path');
const app = express();
// const router = express.Router();

const internalError = false;  // #FD ~ For development

// Open Access to Static Assets
app.use(
   '/static', 
   express.static( path.join(__dirname, 'public') )
);

// Settings
const PORT = 3000; // #FD ~ For development

// View Engine
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// Modular Routing
const index = require('./routes/index');



// Internal Error Test
app.use( (req, res, next) => {
   try{
      if(internalError) throw new Error('Internal Server Error - [AXERR:000] Server could not execute requested process.');
   } catch(err) {
      next(err);
   }
   next();
});

// Main
app.use(index);


// 404 Error-Catching - (Default, Missing) Route
app.use( (req, res, next) => {
   const err = new Error("Page Not Found - The resource requested does not exist.");
   err.status = 404;
   next(err);
});

// Error-Handler
app.use( (err, req, res, next) => {
   const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

   // Pass variables to render-view using second argument of .render()
   err.status = err.status || 500;
   res.status(err.status);

   const error = err;

   if(err.status===404) return res.render('page-not-found', {url, error});
   res.render('error', {url, error});

   // Pass variables to render-view using `res.locals`
   // res.locals.url = url;
   // err.status = err.status || 500;
   // res.locals.error = err; // Passes error object into render-view
   // res.status(err.status);
   
   // if(err.status===404) return res.render('page-not-found');
   // res.render('error');
});

// #FD ~ For Development
app.listen(PORT, () => { console.log(`Server running on Port 3000`); })

