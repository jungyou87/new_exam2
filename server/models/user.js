var mongoose = require('mongoose')
//Schemas
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    appoitments : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Appoitment'
    }]

});

// Register
mongoose.model('User', UserSchema);