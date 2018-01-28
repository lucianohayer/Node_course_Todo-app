const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: '5a6ce982d140fa85a7ed86df'}).then((todo) => {
//   console.log(todo)
// })

Todo.findByIdAndRemove('5a6ce982d140fa85a7ed86df').then((todo) => {
  console.log(todo);
});
