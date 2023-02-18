const noteService = require('./notes.services');
const catchAsync = require('express-async-handler');
const _ = require('lodash');

const createNote = catchAsync(async (req, res) => {
  const data = await noteService.createNote(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Note successfully created...',
    data,
  });
});

const getNote = catchAsync(async (req, res) => {
  const data = await noteService.getNote(req.params._id);
  res
    .status(202)
    .json({ status: true, message: 'Note successfully retrieved...', data });
});

const getNotes = catchAsync(async (req, res) => {
  const filter = _.pick(req.query, ['page', 'per_page', 'sortBy']);
  const data = await noteService.getNotes(filter);
  res
    .status(201)
    .json({
      status: 'success',
      message: 'All notes successfully retrieved...',
      data,
    });
});

const editNote = catchAsync(async (req, res) => {
  const data = await noteService.updateNote(req.params.noteId, req.body);
  res.status(201).json({
    status: 'success',
    message: 'Note item successfully edited...',
    data,
  });
});

const deleteNote = catchAsync(async (req, res) => {
  await noteService.removeNote(req.params.id);

  res.status(201).json({
    status: true,
    message: `Note item with the id ${req.params.id} was just deleted...`,
  });
});

module.exports = { createNote, getNote, getNotes, editNote, deleteNote };
