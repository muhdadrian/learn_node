/*
to use vi code editor in terminal:

vi index.js
-press i to get into INSERT mode

type:
name = 'Adrian';
age = 43;

to quit:
press esc
press :wq

type cat index.js (to view its content):
adriannandu@kingdeMacBook-Air 3 % cat index.js
name = 'Adrian';
age = 43;
*/

/*
to get into the file by using load command:

clear the terminal first (clear)
.load index.js (type this command)
name = 'Adrian';
age = 43;

we can use the file now:
> name
'Adrian'
> age
43
> 

we exit again (.exit)
rm index.js (to remove the file)
*/

/*
we enter node once again by typing node:

> const name ='Adrian';
undefined
> const age = 43;
undefined
> const sayHello = (name, age) {
const sayHello = (name, age) {
                             ^

Uncaught SyntaxError: Unexpected token '{'
> const sayHello = (name, age) {

just press 🔝 (up) key to repeat the syntax above and make correction (arrow):

> const sayHello = (name, age) => {
... console.log(`Hi, my name is ${name}, I am ${age}.`);
... }

then we save to (we already rm index.js just now):
.save index2.js
Session saved to: index2.js

then exit:
.exit

check by using cat index2.js:

const name ='Adrian';
const age = 43;
const sayHello = (name, age) {
const sayHello = (name, age) = > {
const sayHello = (name, age) => {
console.log(`Hi, my name is ${name}, I am ${age}.`);
}%  
*/

/* 
to edit the wrong code above:

@ clear
@ vi index2.js
@ i
@ delete the wrong line of code
@ esc :wq
@ cat index2.js

now we can use this js file
*/

/*
break and clear are used to get out from the middle of multi-line coding that we are writing:

@ type node

> const sayHello = (name, age) => {
... .break
> 

@ just type .break (or .clear) if you want to quit. It will return back to command prompt 
@ if in emergency just type control + C
*/

/*
we can also type multiline simultaneously, but not using the multiline coding like just now. We use .editor: 

.editor (this is like vi, but this is in REPL)
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const name = 'Adrian';
const age = 43;

@ if you want to use the vars above use control + D, if not control + C

@ press control + D. It will return to command prompt, but I can access to name and age vars:
> name
'Adrian'
> age
43
> 

.exit (to exit)

@ this is suitable for debugging and executing a simple script using node.
*/

//cat, ll, vi, ls are unix command.
//in REPL is node command
