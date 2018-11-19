# NodeJS_CodeTraining
A hub of my progress with NodeJS, examples and exercises 
_________________________________________________________

Dependencies
_________________________________________________________

Init a node project:
$npm init -y

Install express library:
$npm i express

Install nodemon library:
$npm i nodemon

_________________________________________________________

Commands with nodemon and ECMA6
_________________________________________________________

$nodemon --experimental-modules app.mjs

_________________________________________________________

Commands with Vue and ESLint
_________________________________________________________


    "start": "nodemon src/app.js --exec  \"npm run lint && node\"",
    "lint": "eslint src/**/*.js --fix",
    "lint:fix": "eslint src/**/*.js --fix",
    "seed": "node seed"
