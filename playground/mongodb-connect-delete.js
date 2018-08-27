// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/ToDoApp';

MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // var todos = db.collection('ToDo');

    var users = db.collection('Users');

    //// TODO: deleteMany
    // todos.deleteMany({text: 'Buy a house'}).then((res) => {
    //     console.log(res.result.ok, '     ', res.result.n);
    // });

    //// TODO: deleteOne
    // todos.deleteOne({text: 'Buy a house'}).then((res) => {
    //     console.log(res.result.ok, '     ', res.result.n);
    // });

    //// TODO: findOneAndDelete
    // todos.findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    //// TODO: deleteMany Users
    // users.deleteMany({name: 'Thato'}).then((res) => {
    //     console.log(res.result.ok, '     ', res.result.n);
    // });

    //// TODO: findOneAndDelete Users
    users.findOneAndDelete({_id: new ObjectID('5b83f1aecb602e1b587b7880')}).then((res) => {
        console.log(res);
    });

    // db.close();

});
