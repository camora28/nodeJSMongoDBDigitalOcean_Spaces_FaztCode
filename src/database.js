const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/midatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
.then(db => console.log(`Database is connected to ${db.connection.host}`))
.catch((err) => console.err(err));

