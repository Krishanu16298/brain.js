let brain = require('brain.js');
let data = require('./data.json');

let netwotk = new brain.recurrent.LSTM();

let trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

netwotk.train(trainingData, {
    iterations: 2000
});

let output = netwotk.run('I fixed the error on line 255');

console.log(output);