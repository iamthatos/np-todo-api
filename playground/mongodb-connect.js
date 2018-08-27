// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/ToDoApp';

var doc = {
  test: 'Something interesting to do',
  completed: false
}

var user = {
    name: 'Thato',
    age: 30,
    location: 'Pretoria'
}

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var docs = db.collection('ToDo');

    // docs.insertOne(doc, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     };
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // var users = db.collection('Users');
    //
    // users.insertOne(user, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     };
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();

});
