

# Portfolio

## Table of Contents
1. [Externalities](#externalities)
1. [Readme](#readme)
1. [Task Roster](#task-roster)
1. [Devlog](#devlog)
1. [Reference](#reference)
1. [Attribution](#attribution)
1. [Notes](#notes)
1. [Archive](#archive)
1. [Auto-Generated Markdown](#auto-generated-markdown-jsdoc3-for-appjs)

## Externalities

### Style-Change Documentation
The following changes were implemented for the Team Treehouse "Exceeds Expectations" requirements.

1. Rounded-corners (`:root {--borderRadius: 5px;}`) added to: `.box img`, `.sidebar .thumbnail`, `.cell img`, `.btn-link`, `pre`, `pre&::-webkit-scrollbar`, `pre&::-webkit-scrollbar-thumb`
1. Created a user-friendly `pre code`-block style to allow pleasant display of the `Error Stack` on error-pages.
1. Modified `pre code`-block scrollbar-style for normalization across browsers

> [!NOTE] Find Changes: Open `public/css/styles.css` > `CTRL-F` > Search for `!TTHEE`

[ToC](#table-of-contents)

<br>



## Readme
- Team Treehouse Project: Unit-6
- Dynamic-Site Portfolio
- Node.js, Express, Pug, JavaScript, HTML, CSS
- https://portfolio-jcruzaxaeon.onrender.com/
	> [!NOTE] App may take <mark>~30-sec+</mark> to load due to server spin-up limitation placed on render.com's FREE-hosting tier. 
- https://github.com/jcruzaxaeon/portfolio.git

### Current Task Roster
- [ ] Explore alternative free-deployment options

### Development
- Node.js, Express, Pug
- JavaScript, HTML, CSS
- CLI Git, Central, Remote GitHub Repo
- WSL2 > Debian 10 > Linux CLI
- VS Code, Vim

### Deployment
- `render.com` Hosting

#### Deploy on `render.com`
1. Login to https://render.com > `dashboard.render.com` > `New +`
1. `Web Service` > `Build and deploy from a Git repository` > `Next`
1. `Configure Account` > Enter GitHub password > Add project repo
1. Click project `Connect`-button
1. Name: `portfolio-jcruzaxaeon`
1. Build Command: `$ npm install`
1. Start Command: `$ node app.js`
1. Click `Create Web Service`-button

<br>



## Task Roster
- [ ] Explore alternative free-deployment options
   - [ ] Digital Ocean
   - [ ] Oracle
   - [ ] Google
   - [ ] AWS

[ToC](#table-of-contents)

<br>



## Devlog
Date indicates start of session.
- **12/4/2023**:
   1. refactor, comment, add 6tth
   1. refactor for deployment on render.com
   1. integrate into axaeon.com
- **12/3/2023**:
   1. implement specification
- **12/1/2023**:
   1. build `data.json` ~ see `6tth_ios-b.pdf` > step 5
   1. push (images, data)
   1. build boilerplate ~ run "$ nodemon"
      >[!BUG]
      >"`res.locals.error = err;`" ~ !`local` 
      - build boilerplate error-handling
      - build boilerplate HTML
- **11/30/2023**:
   1. ini project
   1. add remote GitHub-repo ~ commit ~ push
   1. ini stack
   1. create 500px-wide images for projects 1-5
      ```
             Height
         500px    1200px
      1  X        X
      2  X        X
      3  X        X
      4  X        X
      5  X        X
      ```
- **MM/DD/YYYY**
   - [ ] Lorem
   	- [ ] Ipsum



## Reference

### Reference Table
| first         | second                           |
| ------------- | -------------------------------- |
| Lorem         | Ipsum                            |

[ToC](#table-of-contents)

<br>



## Attribution
- **Photo Editing**: befunky.com

[ToC](#table-of-contents)

<br>



## Notes

1. Node.js Path-Module: methods for (manipulating / building) paths at runtime
   
   ```javascript
   // 1. `path`: view engine setup
   let path = require('path');
   
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'pug');
   
   // 2. `static`: [x] 1. Add static middleware
   app.use( express.static('public') );
   ```
   - from Team Treehouse Lesson 6503a: Recipies

1. `npm install morgan`: HTTP-request logger
   ```javascript
   const logger = require('morgan');
   const app = express();

   app.use(logger('dev'));
   ```

1. `require()`: "built-in CommonJS[specification]-module function supported by Node.js that lets you included modlues" -https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/

1. `express()`: (Node.js, Express) "function creates an instance of an Express application.  accepts an (**`#A`**) optional callback-function(`cb`) as an argument.  `cb` executed everytime a request is made to application."  any other argument-type (e.g. number, string) is (invalid, irrelevant).
   ```javascript
   const express = require('express');
   const app = express(cb); //#A

   function cb(req, res, next) => { console.log("request recieved"); next(); }
   ```

[ToC](#table-of-contents)

<br>



## Data
- `title`: Dynamic-Site Portfolio
- `liveLink`: https://portfolio-jcruzaxaeon.onrender.com/
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

[ToC](#table-of-contents)

<br>



## Archive
Lorem

