const  Config = require('./config/Config')
const express = require('express')
const mongoose = require('mongoose');
const scraper = require('./scrapper')
const app = express();


require('./routes')(app)






mongoose.connect('mongodb+srv://dezz:' 
+ Config.db.password +'@cluster0-2ks9k.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    app.listen(Config.port, () =>  {
        console.log(`listening server side on ${Config.port} Connected to Mongo/Mongoose Database`)
    })
    scraper("https://www.data.gouv.fr/api/1/datasets/?page=3000&page_size=1")
}).catch((err) => {
    console.log(err)
});
