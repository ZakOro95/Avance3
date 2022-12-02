const ProduccionPlayeras=require('../models').ProduccionPlayeras

function create(req,res){
    ProduccionPlayeras.create(req.body)
    .then(PP=>{
        res.status(200).send({PP})
    })
    .catch(err=>{
        res.status(500).send({err})
    })
}

function getAll(req,res){
    ProduccionPlayeras.all(
    )
    .then(PP=>{
        res.status(200).send({PP})
    })
    .catch(err=>{
        res.status(500).send({err})
    })
}


module.exports={
    create,
    getAll
}