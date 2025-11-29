//console.log(process.argv); //we just need a property named argv to capture the args. In command line / terminal: node app adrian nandu. The result is an array:
// [
//   '/usr/local/bin/node', -- [0]
//   '/Users/adriannandu/Desktop/programming/learn_node_sg/58/app', -- [1]
//   'adrian', [2]
//   'nandu' [3]
// ]

//by using node.js we can capture element [2] and [3] above
//if we want to only write adrian. It is in what array element:
console.log(process.argv[2]); //node app adrian nandu -- the result is adrian. This is by using process arg by Node.js
