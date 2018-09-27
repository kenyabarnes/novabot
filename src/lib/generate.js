'use strict';

const model = require('./markovtrain.js')();
model.then(function (data){
    let minLength = 15;
    let generated = [];
    while(true){

        if(generated.length === 0){
            let word = randomWord(data['START']);
            generated[0] = word;
        }else if(ismember(data, 'END', generated[generated.length-1])){
            if(generated.length > minLength) {
                break;
            }else{
                let word = randomWord(data[generated[generated.length-1]]);
                generated.push(word);
            }
        }else{
            let word = randomWord(data[generated[generated.length-1]]);
            generated.push(word);
        }
    }



    for(let index = 0; index < generated.length; index++){
        process.stdout.write(generated[index] + " ");
    }

}).catch(function (err){
    console.log(err);
});

let randomWord = function(array){
    return array[Math.floor(Math.random()*array.length)];
};

function ismember(model, key, value){
    for(let index = 0; index < model[key].length; index++){
        if(model[key][index] === value){
            return true;
        }
    }
    return false;
}

