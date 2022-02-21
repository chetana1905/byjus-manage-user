const App = require('./app')
const mongoose  = require('mongoose');

mongoose.connect("mongodb://localhost:27017/manage-user").then(() => {
    console.log("connected to database");
}).catch(err => {
    console.log("this is error mongodb arised");
    console.log(err);
})

const server = App.listen('8080', () => {
    console.log("listening to server");
})