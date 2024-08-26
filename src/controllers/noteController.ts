import express, { Router } from 'express';
import { createNote, getNote, getNotes, updateNote, deleteNote } from '../services/noteService';

const noteRouter: Router = express.Router();

noteRouter.post('/notes', async (req, res) => {
  try {
    const note = new Note(req.body.id, req.body.title, req.body.content);
    await createNote(note);
    res.status(201).send(`Note created with id ${note.id}`);
  } catch (error) {
    res.status(500).send('Error creating note');
  }
});

noteRouter.get('/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const note = await getNote(id);
    if (note) {
      res.send(note);
    } else {
      res.status(404).send(`Note with id ${id} not found`);
    }
  } catch (error) {
    res.status(500).send('Error getting note');
  }
});

noteRouter.get('/notes', async (req, res) => {
  try {
    const notes = await getNotes();
    res.send(notes);
  } catch (error) {
    res.status(500).send('Error getting notes');
  }
});

noteRouter.put('/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const note = new Note(id, req.body.title, req.body.content);
    await updateNote(id, note);
    res.send(`Note with id ${id} updated`);
  } catch (error) {
    res.status(500).send('Error updating note');
  }
});

noteRouter.delete('/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteNote(id);
    res.send(`Note with id ${id} deleted`);
  } catch (error) {
    res.status(500).send('Error deleting note');
  }
});

export { noteRouter };