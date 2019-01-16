const mongoose = require('mongoose');
const mongo = require('mongodb');
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
    console.error('${err.message}');
});

const app = require('./app');
const listener = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
