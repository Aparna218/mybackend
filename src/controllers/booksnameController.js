const BooksnameModel = require("../models/BooksnameModel")
const Model= require("../models/BooksnameModel")

const createbooksname= async function (req, res) {
    let data= req.body
    let savedData= await BooksnameModel.create(data)
    res.send({msg: savedData})
}

const getbooksnameData= async function (req, res) {
    let allUsers= await BooksnameModel.find()
    res.send({msg: allbooksname})
}

module.exports.createbooksname= this.createbooksname
module.exports.getbooksnameData= getbooksnameData