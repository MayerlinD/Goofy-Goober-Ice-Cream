const { update } = require('../models/goober')
const Goober = require('../models/goober')

const dataController = {
    home(req, res, next){
        Goober.find({}, (err, foundGoobers) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.goobers = foundGoobers
                next()
            }
        })
    },
    //Index,
    index(req, res, next){
        Goober.find({}, (err, foundGoobers) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.goobers = foundGoobers
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Goober.findByIdAndDelete(req.params.id, (err, deletedGoober) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.goober = deletedGoober
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        Goober.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGoober)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.goober = updatedGoober
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        Goober.create(req.body, (err, createdGoober)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.goober = createdGoober
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Goober.findById(req.params.id,(err, foundGoober) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a goober with that ID'
                })
            } else {
                res.locals.data.goober = foundGoober
                next()
            }
        })
    }
}

module.exports = dataController