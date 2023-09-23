// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

const dbConnectionUri = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const client = new MongoClient(dbConnectionUri);

async function connect() {
	await client.connect();

	console.log('Connected successfully to server');

	const db = client.db(dbName);
	const collection = db.collection('Todos');
	const userCollection = db.collection('Users');

	try {
		const result = await collection.findOneAndUpdate(
			{
				_id: new ObjectId('57bc4b15b3b6a3801d8c47a2'),
			},
			{
				$set: {
					completed: true,
				},
			},
			{
				returnOriginal: false,
			}
		);

		console.log('Todo updated');
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.log('Unable to update todo', err);
	}

	try {
		const result = await userCollection.findOneAndUpdate(
			{
				_id: new ObjectId('57abbcf4fd13a094e481cf2c'),
			},
			{
				$set: {
					name: 'Andrew',
				},
				$inc: {
					age: 1,
				},
			},
			{
				returnOriginal: false,
			}
		);
		console.log('User updated');
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.log('Unable to update user', err);
	}

	return 'done.';
}

connect()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
