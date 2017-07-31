var mongoose = require ('mongoose')
var Appointment = mongoose.model('Appointment')
var User = mongoose.model('User')

module.exports = {
    index : function (req, res){
        Appointment.find({}).populate({
            path : '_user',
            Model : 'User'
        })
        .exec((err, appointments) => {
            if (err){
                return res.json(err)
            }
            return res.json(appointments)
        } )

    },
    create : function (req,res){
        list = Appointment.find({ date : req.body.date })
        if (list.length >= 3){
            console.log('error')
            return res.json({ error : 'Already 3 appointments on the day' })
        }
        else {
            Appointment.create(req.body, function(err, appointment){
            if(err){
                return res.json(err)
            }
            return res.json(appointment)
        })
        }
    },
    destroy : function (req, res) {
        Appointment.findByIdAndRemove(
            req.params.id, function(err, appointment) {
                if(err){
                    return res.json(err)
                }
                return res.json ({ status : 'canceled'})
            })
    }

}