const ProduccionPlayerasController=require('../controllers').ProduccionPlayeras

module.exports=(app)=>{
    app.post('/api/ProduccionPlayeras',ProduccionPlayerasController.create)
    app.get('/api/ProduccionPlayeras',ProduccionPlayerasController.getAll)
}