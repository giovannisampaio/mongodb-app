var mongodb = require('mongodb');

// Tells the driver which MongoDB to connect to	
var uri = 'mongodb://localhost:27017/example';

// Create a connection to MongoDB using MongoClient helper
mongodb.MongoClient.connect(uri, function(error, db) {
	// print an error message if db is null
	if (error) {
		console.log(error);
		process.exit(1);
	}
	// Access the sample collection and insert a document
	db.collection('sample').insert({x:1}, function(error, result) {
		if (error) {
			console.log(error);
			process.exit(1);
		}

		// Returns an array of documents in the call back
		db.collection('sample').find().toArray(function(error, docs) {
			if (error) {
				console.log(error);
				process.exit(1);
			}

			console.log('Found docs:');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});
