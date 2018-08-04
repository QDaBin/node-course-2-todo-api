const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function(err, client){
    if(err){
        return console.log('Unable connect to MongoDB server.');
    }
    console.log('Connected to MongoDB Server.');

    const db = client.db('TodoApp');
    db.collection('todos').findOneAndUpdate(
        {_id: new ObjectID("5b63f20684bdfd2b28a74cad")}, 
        { $set: {completed: true} },
        {returnOriginal: true}
    ).then(
        function(result){
            console.log(result);
        }
    );
    client.close();
})