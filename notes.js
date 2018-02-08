// console.log('Starting note.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log('Adding Note ...');
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var remainNotes = notes.filter((note) => note.title !== title);
  saveNotes(remainNotes);
  return notes.length !== remainNotes.length;
};

module.exports = {
  addNote, // ES6 addNote:addNote
  getAll,
  getNote,
  removeNote
};
