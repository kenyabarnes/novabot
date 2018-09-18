'use strict';



let start = async function(){
    const fs = require('fs');
    const file =JSON.parse(fs.readFileSync('./result.json', 'utf8'));

    let model = {
        'START': [],
        'END': []
    }

    await populate(file)
        .then(function(data){
            data.forEach(function(currString){
                    let splitString = currString.split(" ");
                    for(let index = 0; index < splitString.length; index++){

                        if(index === splitString.length-1){
                            if(splitString.length === 1) {
                                append(model, 'START', splitString[index]);
                            }
                            append(model, 'END', splitString[index]);
                        }else{
                            if(index === 0){
                                append(model, 'START', splitString[index]);
                            }
                            append(model, splitString[index], splitString[index+1]);
                        }
                    }
                }
            );

        });
    return model;
};


function append(model, key, value){
    if(Array.isArray(model[key])){
           model[key].push(value);
    }else{
        model[key] = [];
        model[key].push(value);
    }
}

function populate(){
  return new Promise(function(resolve, reject){
    let messages = [];
    let list = file.chats.list;
    list.forEach(function(data){
      data.messages.forEach(function(msg){
        if(!Array.isArray(msg.text)) {
          if(msg.text !== "") {
              messages.push(msg.text.toLowerCase());
          }
        }
      });
    });
    resolve(messages);
  });



}

module.exports = start();