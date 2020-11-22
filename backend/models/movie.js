const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: {
    type: String
  },
  director: {
    type: String
  },
  summary: {
    type: String
  },
  year: {
    type: String
  },
  rating: {
    type: Number
  }
}, {
  collection: 'movies'
})

module.exports = mongoose.model('Movie', movieSchema)
