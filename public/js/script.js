

/*
# Portfolio
- `originalFileContent`: Unchanged
- `sourceAuthor`: Team Treehouse
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

'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});