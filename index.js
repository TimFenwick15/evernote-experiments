const { developerToken } = require('./keys')
const Evernote = require('evernote')
var client = new Evernote.Client({token: developerToken});

// Set up the NoteStore client 
var noteStore = client.getNoteStore();


// How to list notebooks

//noteStore.listNotebooks().then(d => console.log(d)).catch(e => console.log(e))


// How to add a note

/*var ourNote = new Evernote.Types.Note();
var noteBody = "Hello world";
var nBody = '<?xml version="1.0" encoding="UTF-8"?>';
nBody += '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">';
nBody += "<en-note>" + noteBody + "</en-note>";
ourNote.title = "Test";
ourNote.content = nBody;
noteStore.createNote(ourNote)
.then(function(note) {
  // Do something with `note`
  console.log(note);
}).catch(function (err) {
  // Something was wrong with the note data
  // See EDAMErrorCode enumeration for error code explanation
  // http://dev.evernote.com/documentation/reference/Errors.html#Enum_EDAMErrorCode
  console.log(err);
});
*/


// how to read notes

var filter = new Evernote.NoteStore.NoteFilter({
  words: 'Hello',
  ascending: true
});
var spec = new Evernote.NoteStore.NotesMetadataResultSpec({
  includeTitle: true,
  includeContentLength: true,
  includeCreated: true,
  includeUpdated: true,
  includeDeleted: true,
  includeUpdateSequenceNum: true,
  includeNotebookGuid: true,
  includeTagGuids: true,
  includeAttributes: true,
  includeLargestResourceMime: true,
  includeLargestResourceSize: true,
});

noteStore.findNotesMetadata(filter, 0, 500, spec).then(function(notesMetadataList) {
  noteStore.getNote(notesMetadataList.notes[0].guid, true, false, false, false).then(d => console.log(d)).catch(e => console.log(e))
}).catch(e => console.log(e))
