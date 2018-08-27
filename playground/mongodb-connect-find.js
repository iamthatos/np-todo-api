// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/ToDoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var todo = db.collection('ToDo');


    // todo.find({_id: new ObjectID('5b83d31aabdb382fe4ba4f1b')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos');
    // });

    // todo.find().count().then((count) => {
    //     console.log('Todos Count: ', count);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });


    var users = db.collection('Users');

    users.find({name: 'Thato'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users: ', err);
    });

    db.close();

});
