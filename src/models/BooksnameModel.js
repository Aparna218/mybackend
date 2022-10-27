const mongoose = require('mongoose');


const booknameSchema = new mongoose.Schema ({
book_name : String,
author_id: Number,
price : String,
rate: Number
},
{ timestamps: true }
)
module.exports = mongoose.model('Bookname', booknameSchema) 