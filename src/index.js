const express = require('express')
const bodyparser = require('body-parser')
const router = require("../src/router/router")
const mongoose=require('mongoose')

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://pattamu:iKHwECgQCaYNVpge@sandeepcluster.9rzkh.mongodb.net/sygene?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', router);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
