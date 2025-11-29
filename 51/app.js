//to install nodemon locally (in your project) as you will deploy your app and you still need nodemon. If you only installed globally, when you deploy it, it will not work

//npm install --save-dev nodemon@2.0.7
//in package.json, change the "start": "node app" in scripts to "start": "nodemon app"/"nodemon app.js",
//to run local nodemon (npm start) and not nodemon app (this for global)
//npm start will run script with key start
//when we deploy our apps to server, we'll ask our server to run this script. The server will continuously run it. It's useful when we want to build webserver

const chalk = require('chalk');
const name = 'Adrian';

const text = chalk`Lorem ipsum dolor {bgBlue.black.strikethrough sit amet} consectetur, {bgGreen.italic.black adipisicing} elit. Voluptatem, blanditiis. My name is : ${name}`;

console.log(text);
