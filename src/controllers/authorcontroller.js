const authorModel = require("../models/authorModel")
const Model= require("../models/authorModel")

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getauthorData= async function (req, res) {
    let allauthors= await authorModel.find()
    res.send({msg: allauthors})
}

module.exports.createauthor= createauthor
module.exports.getauthorData= getauthorData