// Generated by CoffeeScript 1.3.3
(function() {
  var ProfileSchema, Schema, mongoose;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  ProfileSchema = new Schema({
    username: String,
    isActive: Boolean
  });

  module.exports = mongoose.model('ProfileModel', ProfileSchema);

}).call(this);
