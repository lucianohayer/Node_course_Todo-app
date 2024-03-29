const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '650eb9d726a73df762eafa81';

if (!ObjectId.isValid(id)) {
	console.log('Id not valid');
}

console.log('1ra forma');
Todo.find({
	_id: id,
}).then(todos => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id,
}).then(todo => {
	console.log('Todo', todo);
});

Todo.findById(id)
	.then(todo => {
		if (!todo) {
			return console.log('Id not found');
		}
		console.log('TodoById', todo);
	})
	.catch(e => console.log(e));

var userId = '5a64e4e211c65209e06401b4';

User.findById(userId)
	.then(user => {
		if (!user) {
			return console.log('User not found');
		}
		console.log('User', user);
	})
	.catch(e => console.log(e));

console.log('2da forma');
User.findById(userId).then(
	user => {
		if (!user) {
			return console.log('User not found');
		}
		console.log(JSON.stringify(user, undefined, 2));
	},
	e => {
		console.log(e);
	}
);
