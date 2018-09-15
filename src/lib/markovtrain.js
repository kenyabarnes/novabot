'use strict'

const fs = require('fs');
const file =JSON.parse(fs.readFileSync('./result.json', 'utf8'));


populate(file)
/*
.then(function(data){
  fs.writeFile('./data.json', data, function(err){
    if (err) throw err;
  });
});
*/

function populate(){
  return new Promise(function(resolve, reject){
    let messages = [""];
    let list = file.chats.list;
    list.forEach(function(data){
      data.messages.forEach(function(msg){
        messages.push(msg.text);
      });
    });
    resolve(messages);
  });
}
