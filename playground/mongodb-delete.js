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

	// deleteMany
	try {
		const result = await collection.deleteMany({ text: 'Eat lunch' });
		console.log(result);
	} catch (error) {
		console.error(error);
	}

	// deleteOne
	try {
		const result = await collection.deleteOne({ text: 'Eat lunch' });
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.error(error);
	}

	// findOneAndDelete
	try {
		const result = await collection.findOneAndDelete({ completed: false });
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.error(error);
	}

	try {
		const result = await userCollection.deleteMany({ name: 'Andrew' });
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.error(error);
	}

	try {
		const result = await userCollection.findOneAndDelete({
			_id: new ObjectId('57ac8d47878a299e5dc21bc8'),
		});
		console.log(JSON.stringify(result, undefined, 2));
	} catch (error) {
		console.error(error);
	}

	return 'done.';
}

connect()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
