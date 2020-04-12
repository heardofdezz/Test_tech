const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const namrSchema = mongoose.Schema({ 
    _id: mongoose.Types.ObjectId,
    title: String,
    url: String
})
module.exports = mongoose.model('Namr', namrSchema);