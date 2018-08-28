let brain = require('brain.js');
let network = new brain.NeuralNetwork();

network.train([
    {input:[1,2], output: [1]},
    {input:[1,3], output: [1]},
    {input:[2,3], output: [0]},
    {input:[2,4], output: [1]},
    {input:[1,2], output: [0]},
    {input:[1,3], output: [0]},
    {input:[3,4], output: [0]}
]);

let output = network.run([1,4]);

console.log(`Probability: ${output}`);