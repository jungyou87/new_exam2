var path = require ('path');
var users = require('../controllers/users.js');
var appointments = require('../controllers/appointments.js');

module.exports = function (app) {
    app.post('/users/create', users.create);
    
    app.get('/appointments/index', appointments.index );
    app.post('/appointments/create', appointments.create);
    app.delete('/appointments/delete/:id', appointments.destroy);

    app.all('*', function(req, res){
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}

