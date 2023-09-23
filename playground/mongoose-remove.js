const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

Todo.deleteOne({ _id: '650eb9d726a73df762eafa81' }).then(result => {
	console.log(result);
});

Todo.findOneAndDelete({ _id: '650eb9d726a73df762eafa81' }).then(todo => {
	console.log(todo);
});

Todo.findByIdAndDelete('650eb9d726a73df762eafa81').then(todo => {
	console.log(todo);
});
