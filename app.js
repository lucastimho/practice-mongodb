const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const insertDocuments = function(db, callback) {
    // Get the documetns collection
    const collection = db.collection('fruits');
    //Inser some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kind of sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff"
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    })
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    })
}