// node
// not a framework - not a programming language
// a javascript runtime (port of the v8 engine from chrome) 

// presented in 2009, written in C, C++ and JavaScript.
// fork in 2014, to keep up to date with the newest additions in the v8 engine. merged back in 2015
// in 2018 Ryan Dahl released the first version of deno, a js runtime based on typescript written in the programming 
// language Rust


// installation - checking if node is installed : $ node -v 
// checking if nvm is installed : $ nvm --version
// also show the homepage of node

// install the latest lts version : $ nvm install --lts 
// to not to have to do that all the time - set default : $ nvm alias default 12.16.1  


// now we have the ability to run javasctipt without a browser

console.log('Hello Node')

// run the file
// node nameofthefile.js 

// we don't have the document object in node
console.log(document);

// npm - the package manager for node.js
// more than one million packages on npm 

// terminology : module or package, dependencies

// A package or module is a bundle of reusable code that is packaged with the code it depends on 
// (and that code is called dependencies).


// we use modules to reuse code and not have to rewrite everything on our own

// if we install node we install npm automatically
// check for npm : $ npm --version

// package.json - manifest line - that lists the dependencies of our application

// You can check for outdated packages in your project easily by running npm outdated command.

// to update the dependencies $ npm update

// semantic versioning package.json  4.2.3 -> major.minor.patch
//  ~1.0.2 it means to install version 1.0.2 or the latest patch version such as 1.0.4. 
// ^1.0.2 it means to install version 1.0.2 or the latest minor or patch version such as 1.1.0.

// the package.lock holds the information of the exact dependency tree so that after the next install 
// you get the exact file structure - the package.lock file you normally don't touch 

// $ npm init

// or, if you don't want to answer all these questions : $ npm init -y

// install our first npm package

// npm install chalk - in older versions of npm you had to do : npm install chalk --save
// normally you install packages per project
// npm install -g // installs package globally



// explain the node_modules folder - it will never get commited

var chalk = require('chalk');

console.log(chalk.blue('Hello, npm!'));

// there are also built in modules available in node
const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');

console.log(randomString);


// require a function from another file
const addNumbers = require('./add');

console.log(addNumbers(3, 5));

// require an object containing multiple functions
const functions = require('./functions');

console.log(functions.goodBye());

// get info about a package via the documentation page : https://www.npmjs.com/package/chalk

// Exercise : install a package from this list and use it, especially the weird part
// https://github.com/sindresorhus/awesome-nodejs#weird 

// see the supervillains folder