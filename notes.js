console.log('Starting note.js');

const fs = require('fs');

var addNote = (title, body) => {
  console.log('Adding Note ...');
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('note-data.json');
    notes = JSON.parse(notesString);
  } catch(e) {

  }


  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote, // ES6 addNote:addNote
  getAll,
  getNote,
  removeNote
};
