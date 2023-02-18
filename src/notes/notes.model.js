const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new Schema({
  title: {
    type: String,
    required: false,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  extras: {
    type: String,
    trim: true,
  },
  dateCreated: {
    type: String,
  },
});

const Note = mongoose.model('Model', notesSchema);
module.exports = Note;
