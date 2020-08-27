const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/starwars',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }
);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = mongoose;