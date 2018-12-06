// console.log('keeper-service');

import utilService from './util-service.js'

var NOTES_KEY = 'notesApp'

var notes = [];

var defaultNotes = [
    {
        id: utilService.makeId(),
        type: 'imgType',
        title: 'The 1 image',
        bgColor: '#eaf4fc',
        data: {
            url: 'img/keeper/1-keeper.png',
        }
    },
    {
        id: utilService.makeId(),
        type: 'todosType',
        title: 'Notes list',
        bgColor: '#fff4e6',
        data: {
            todos: ['shopping', 'studying'],
        }
    },
    {
        id: utilService.makeId(),
        type: 'txtType',
        title: 'Texts line',
        bgColor: '#f6fcf4',
        data: {
            txt: 'Lorem ipsum is placeholder text commonly used in'
        }
    },
    {
        id: utilService.makeId(),
        type: 'imgType',
        title: 'Second image',
        bgColor: '#eaf4fc',
        data: {
            url: 'img/keeper/2-keeper.png',
        }
    },
    {
        id: utilService.makeId(),
        type: 'todosType',
        title: 'Notes list #2',
        bgColor: '#fff4e6',
        data: {
            todos: ['eating', 'watching TV'],
        }
    },
    {
        id: utilService.makeId(),
        type: 'txtType',
        title: '#3 txt type',
        bgColor: '#f6fcf4',
        data: {
            txt: 'Second txt type placeholder text commonly used in'
        }
    },
    {
        id: utilService.makeId(),
        type: 'imgType',
        title: 'The best image',
        bgColor: '#eaf4fc',
        data: {
            url: 'img/keeper/3-keeper.png',
        }
    },
    {
        id: utilService.makeId(),
        type: 'todosType',
        title: 'Notes list',
        bgColor: '#fff4e6',
        data: {
            todos: ['shopping', 'studying'],
        }
    },
    {
        id: utilService.makeId(),
        type: 'txtType',
        title: 'Texts line',
        bgColor: '#f6fcf4',
        data: {
            txt: 'Lorem ipsum is placeholder text commonly used in'
        }
    },
    {
        id: utilService.makeId(),
        type: 'imgType',
        title: '#4 image',
        bgColor: '#eaf4fc',
        data: {
            url: 'img/keeper/4-keeper.png',
        }
    },
    {
        id: utilService.makeId(),
        type: 'todosType',
        title: 'Notes list #2',
        bgColor: '#fff4e6',
        data: {
            todos: ['eating', 'watching TV'],
        }
    },
    {
        id: utilService.makeId(),
        type: 'txtType',
        title: 'Second txt type',
        bgColor: '#f0feea',
        data: {
            txt: 'Third txt type placeholder text commonly used in'
        }
    }
];

function createEmptyNote() {
    return {
        // id: utilService.makeId(),
        type: '',
        title: '',
        bgColor: '#f3f3f2',
        data: {}
    }
}

createNotes();




function createNotes() {
  notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || notes.length === 0) {
    notes = defaultNotes;
  }
  utilService.saveToStorage(NOTES_KEY, notes);
  return notes;
}

function query() {
    // var notes = createNotes();
    // notes = utilService.loadFromStorage(NOTES_KEY);
    // utilService.saveToStorage(NOTES_KEY, notes);
    console.log('notes in query,', notes);
    return Promise.resolve(notes);
}

function getNoteById(id) {
    var note = notes.find(note => note.id === id)
    return Promise.resolve(note);
}

function saveNote(note) {
    console.log('saveNote in service,', note);
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        console.log('saveNote in service,noteIdx', noteIdx);
        // Vue.js Caveat!
        notes.splice(noteIdx, 1, note)

    } else {
        note.id = utilService.makeId();
        notes.push(note);
    }
    utilService.saveToStorage(NOTES_KEY, notes);
    // console.log('Sevice is saving the note', note);
    return Promise.resolve(note);
    
}

function removeNote(id) {
	// return Promise.resolve();
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			var noteIdx = notes.findIndex(note => note.id === id)
			notes.splice(noteIdx, 1);
            console.log('notes after remove' ,notes )
            utilService.saveToStorage(NOTES_KEY, notes);
			resolve()
		}, 1000);
	});
    // return Promise.reject();
}

function removeTodo(noteId, todoIdx) {
	// return Promise.resolve();
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
            var noteIdx = notes.findIndex(note => note.id === noteId)
            var currTodos = notes[noteIdx].data.todos;
            currTodos.splice(todoIdx, 1)
            // console.log('notes[noteIdx].data.todos' ,notes[noteIdx].data.todos )
            // notes[noteIdx].data.todos[todoIdx]
            // console.log('notes after remove' ,notes )
            utilService.saveToStorage(NOTES_KEY, notes);
			resolve()
		}, 1000);
	});
    // return Promise.reject();
}

function pinNote(noteId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
			var noteIdx = notes.findIndex(note => note.id === noteId)
            notes.splice(0, 0, notes.splice(noteIdx, 1)[0]);
            utilService.saveToStorage(NOTES_KEY, notes);
			resolve()
		}, 1000);
	});
}


export default {
    query,
    getNoteById,
    createEmptyNote,
    saveNote,
    removeNote,
    removeTodo,
    pinNote
}