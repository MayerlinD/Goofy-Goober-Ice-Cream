const { update } = require('../models/ggicecream')
const GGIceCream = require('../models/ggicecream')

const dataController = {
    index(req, res, next){
        GGIceCream.find({}, (err, foundGGIceCreams) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.ggicecreams = foundGGIceCreams
                next()
            }
        })
    },
    destroy(req, res, next){
        GGIceCream.findByIdAndDelete(req.params.id, (err, deletedGGIceCream) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.ggicecream = deletedGGIceCream
                next()
            }
        })
    },
    update(req, res, next){
        GGIceCream.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGGIceCream)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.ggicecream = updatedGGIceCream
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        GGIceCream.create(req.body, (err, createdGGIceCream)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.ggicecream = createdGGIceCream
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        GGIceCream.findById(req.params.id,(err, foundGGIceCream) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find an ice cream with that ID'
                })
            } else {
                res.locals.data.pokemon = foundGGIceCream
                next()
            }
        })
    }
}

module.exports = dataController
