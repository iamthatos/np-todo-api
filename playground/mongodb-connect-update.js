// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/ToDoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var todos = db.collection('ToDo');

    // var todos = db.collection('ToDo');
    //
    // //// TODO: findOneAndUpdate
    // todos.findOneAndUpdate({
    //     _id: new ObjectID('5b840d3bebfc3589954bb091')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });


    var users = db.collection('Users');

    // TODO: findOneAndUpdate inc
    users.findOneAndUpdate({
        _id: new ObjectID('5b83eec472e5d919885fc608')
    }, {
        $set: {
            name: 'Thato'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    // db.close();

});
