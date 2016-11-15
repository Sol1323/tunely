var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Albums = require('./album.js');
