# File Structure and Components

This document explains how the code files are organized, along with a brief description for each file. The code is available in the `src` directory, while images are stored in the `public/imgs` directory.

## Directory Structure

The following is the latest directory structue of the `src` folder in the `master-readable` branch.

```
src
├── App.js
├── index.js
├── index.css
├── Components
│   ├── About
│   │   ├── About.css
│   │   └── About.js
│   ├── Events
│   │   └── Hackerspace
│   │       ├── Hackerspace.css
│   │       └── Hackerspace.js
│   ├── Home
│   │   ├── Landing.css
│   │   ├── Landing.js
│   │   ├── particles.json
│   │   ├── News
│   │   │   ├── News.css
│   │   │   └── News.js
│   │   └── Sessions
│   │       ├── Sessions.css
│   │       └── Sessions.js
│   ├── Markdown
│   │   └── Markdown.js
│   ├── Navbar
│   │   ├── Navbar.css
│   │   └── Navbar.js
│   └── Team
│       ├── Team.css
│       └── Team.js
└── serviceWorker.js
```

## Files and Components

The code is broken down into multiple files and `React Components` for modularity and readability. In this section, the purpose of each file is explained. You can ignore `serviceWorker.js`.

1. `index.js`:
This file just renders the web app defined in `index.js`.

2. `App.js`:
This code in this file takes care of the organisation of the webpage. Components from the other `.js` files are loaded into this file. Sessions, News and Team data from the sheets are loaded here and are passed as props to the other components. The code in this file also assigns routes (such as `/team` for the team page) to the various components.

3. `About.js`:
Description about Tech Club SSN.

4. `Hackerspace.js`:
Description about the HackerSpace event.

5. `Team.js`:
Renders the team data obtained from `App.js`

6. `Sessions.js`:
Renders the session data obtained from `App.js`

7. `News.js`:
Renders the news data obtained from `App.js`

8. `Markdown.js`:
Converts the code written in markdown format in the sessions, news and team data passed to `App.js` to HTML code. Only works for `<p>` and `<a>` tags. 

9. `Landing.js`:
Handles the layout of the home page by aligning the landing page, news and sessions properly.

10. `index.css` (and other css files):
Has style components that are used globally by many files.
> **Note:** Each individual stylesheet accompanying each `.js` file of the same name is imported by that file alone.
