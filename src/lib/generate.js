'use strict';

const model = require('./markovtrain.js');

let randomWord = function(array){
    return array[Math.floor(Math.random()*array.length)];
};
function ismember(model, key, value){
    for(let index = 0; index < model[key].length; index++){
        if(model.key[i] === value){
            return true;
        }
    }
    return false;
}

let generated = [];
while(true){

    if(generated.length === 0){
        let word = randomWord(model['START']);
    }else if(ismember(model, 'END', generated[generated.length-1])){
        break;
    }else{
        let word = randomWord(model[generated[generated-1]]);
    }
}

console.log(generated);
