// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const dbConnectionUri = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const client = new MongoClient(dbConnectionUri);

async function connect() {
	await client.connect();

	console.log('Connected successfully to server');

	const db = client.db(dbName);
	const collection = db.collection('Todos');

	await collection.insertOne(
		{
			text: 'Something to do',
			completed: false,
		},
		(err, result) => {
			if (err) {
				return console.log('Unable to insert todo', err);
			}

			console.log(JSON.stringify(result.ops, undefined, 2));
		}
	);

	// Insert new doc into Users (name, age, location)
	await collection.insertOne(
		{
			name: 'Andrew',
			age: 25,
			location: 'Philadelphia',
		},
		(err, result) => {
			if (err) {
				return console.log('Unable to insert user', err);
			}

			console.log(result.ops[0]._id.getTimestamp());
		}
	);

	return 'done.';
}

connect()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
