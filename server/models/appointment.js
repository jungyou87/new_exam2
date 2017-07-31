var mongoose = require('mongoose')
//Schemas

var AppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: [true, 'Date cannot be blank']
    },
    time : {
        type : String,
        required : [true , 'Time  cannot be blank']
    },
    complain : {
        type : String,
        required : [true, 'Complaing cannot be blank'],
        minlength : 10
    },
    _user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

});


// Register
mongoose.model('Appointment', AppointmentSchema);