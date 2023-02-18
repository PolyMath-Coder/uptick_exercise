const { Router } = require('express');
const {
  createNote,
  getNote,
  getNotes,
  editNote,
  deleteNote,
} = require('./notes.controllers');

const router = Router();

router.post('/create', createNote);
router.get('/all/notes', getNotes);
router.get('/:_id', getNote);
router.put('/:noteId', editNote);
router.delete('/:id', deleteNote);

module.exports = router;
