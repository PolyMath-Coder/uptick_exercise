const Note = require('./notes.model');
const moment = require('moment');

const ApiError = require('../helpers/error');

const createNote = async (data) => {
  try {
    data.dateCreated = moment().format('h:mm a');
    const rawData = JSON.parse(JSON.stringify(data));
    return await Note.create(rawData);
  } catch (error) {
    throw new ApiError(400, 'Unable to create note');
  }
};

const getNote = async (_id) => {
  try {
    return await Note.findById(_id);
  } catch (error) {
    throw new ApiError(400, 'Unable to retrieve note');
  }
};

const getNotes = async (criteria = {}) => {
  const { page, per_page } = criteria;
  const _page = parseInt(page, 10);
  const _per_page = parseInt(per_page, 10);
  return await Note.find()
    .skip(_per_page * (_page - 1))
    .limit(_per_page);
};

const updateNote = async (_id, data) => {
  try {
    return await Note.findByIdAndUpdate(_id, data, { new: true });
  } catch (error) {
    throw new ApiError(400, 'Unable to edit note...');
  }
};

const removeNote = async (id) => {
  try {
    return await Note.findByIdAndDelete(id);
  } catch (error) {
    throw new ApiError(400, 'Unable to remove note...');
  }
};

module.exports = { createNote, getNote, getNotes, updateNote, removeNote };
