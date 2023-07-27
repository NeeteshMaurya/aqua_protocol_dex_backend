const mongoose = require('mongoose')

const usersDetailSchema = new mongoose.Schema({
    account: String,
    pairName: String
})

module.exports = mongoose.model("Users",usersDetailSchema)