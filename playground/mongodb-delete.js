const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function(err, client){
    if(err){
        return console.log('Unable connect to MongoDB server.');
    }
    console.log('Connected MongoDB server.');

    const db = client.db('TodoApp');
    // db.collection('todos').deleteMany({text: "Walk the dog"}).then(
    //     function(result){
    //         console.log(result);
    //     },
    //     function(err){
    //         console.log(err);
    //     }
    // )

    // db.collection('todos').deleteOne({text: "Walk the dog"}).then(
    //     function(result){
    //         console.log(result.result);
    //     },
    //     function(err){
    //         console.log(err);
    //     }
    // )

    db.collection('todos').findOneAndDelete({completed: true}).then(
        function(result){
            console.log(result);
        },
        function(err){
            console.log(err);
        }
    )

    client.close();
})