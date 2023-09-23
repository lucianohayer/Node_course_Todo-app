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
		const todo = await collection
			.find({
				_id: new ObjectId('57bb36afb3b6a3801d8c479d'),
			})
			.toArray();
		console.log('Todo found');
		console.log(JSON.stringify(todo, undefined, 2));
	} catch (error) {
		console.log('Unable to fetch todos', err);
	}

	try {
		const count = await collection.estimatedDocumentCount();
		console.log(`Todos count: ${count}`);
	} catch (error) {
		console.log('Unable to fetch todos', err);
	}

	try {
		const user = await userCollection.find({ name: 'Andrew' }).toArray();
		console.log('User found');
		console.log(JSON.stringify(user, undefined, 2));
	} catch (error) {
		console.log('Unable to fetch todos', err);
	}

	return 'done.';
}

connect()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
