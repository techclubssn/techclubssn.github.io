# Tech Club SSN
Repository containing code for the official Tech Club SSN website. The `master` branch contains the production build version of the website. Switch to the `master-readable` branch to access the readable version of the code.

## Contributing Guidelines
Do you want to make the website better? Great! We welcome suggestions and pull requests. However, please follow these steps before attempting to make changes.

1. Fork this repository.
2. Complete the local setup (instructions given below) without any errors.
3. Go through the [documentation](/public/docs) carefully.
4. Make all modifications to the code in the `dev` branch.
5. Submit a PR to the `dev` branch. Mention one of the contributors in your pull request (listed below).

## Local Setup

Follow these instructions to get the website running on your local system. Instructions are given assuming a linux (ubuntu 16.04 specifically) work environment. If you are using any other OS, please refer to the equivalent of these commands.

1. Install Git, Node (>=10.2.1) and Npm (>=5.6.0).
> **Note**: The versions mentioned in the instructions are the ones used during initial development. A lower version *maybe* compatible, so if you have them already installed you can give it a shot.

2. Clone the `master-readable` branch using the following command.
```
git clone -b master-readable https://github.com/techclubssn/techclubssn.github.io.git
cd techclubssn.github.io
```
3. Install node modules using the following command
```
npm install
```
4. Start the development serving using the following command. You can access the website at http://localhost:3000/
```
npm start
```

## Directory Structure

In the dev branch.

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
