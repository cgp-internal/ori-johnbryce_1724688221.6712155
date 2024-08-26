import { Note } from "../models/noteModel";
import { readCSV, writeCSV } from "../utils/csvUtil";

interface CSVRow {
  id: string;
  title: string;
  content: string;
}

const notesCSVPath = "notes.csv";

export async function createNote(note: Note): Promise<void> {
  const notes: Note[] = await getNotes();
  notes.push(note);
  await writeCSV(notesCSVPath, notes.map(note => ({ id: note.id.toString(), title: note.title, content: note.content })));
}

export async function getNote(id: number): Promise<Note | undefined> {
  const notes: CSVRow[] = await readCSV(notesCSVPath);
  const foundNote: CSVRow | undefined = notes.find((note: CSVRow) => note.id === id.toString());
  if (foundNote) {
    return new Note(parseInt(foundNote.id), foundNote.title, foundNote.content);
  } else {
    return undefined;
  }
}

export async function getNotes(): Promise<Note[]> {
  const notes: CSVRow[] = await readCSV(notesCSVPath);
  return notes.map((note: CSVRow) => new Note(parseInt(note.id), note.title, note.content));
}

export async function updateNote(id: number, note: Note): Promise<void> {
  const notes: Note[] = await getNotes();
  const index: number = notes.findIndex((n: Note) => n.id === id);
  if (index !== -1) {
    notes[index] = note;
    await writeCSV(notesCSVPath, notes.map(note => ({ id: note.id.toString(), title: note.title, content: note.content })));
  }
}

export async function deleteNote(id: number): Promise<void> {
  const notes: Note[] = await getNotes();
  const index: number = notes.findIndex((n: Note) => n.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    await writeCSV(notesCSVPath, notes.map(note => ({ id: note.id.toString(), title: note.title, content: note.content })));
  }
}