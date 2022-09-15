const mongoose = require('mongoose');
const credentials = require('../auth.json');

const uri = `mongodb+srv://${credentials.username}:${credentials.password}@cluster0.0uknhzl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MovieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    title: {
        type: String,
        unique: true,
    },
    launchDate: String,
    mainActor: String,
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = {
    MovieModel,
};