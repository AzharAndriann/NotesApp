import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './Sidebar';
import Main from './main';


function App() {

  const [notes, setNotes] = useState([]); 
  const [activeNote, setActiveNote] = useState(false);


  /* const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []); 
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringfy(notes));
  }, [notes]);*/

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title:"untitled Note",
      body:"",
      lastModified: Date.now(),
    };


    

    setNotes([newNote, ...notes]);



  };

  const onUpdateNote = (updatedNote) => {
    const UpdateNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      };

      return note;
    });

    setNotes(UpdateNotesArray);


  };



  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((notes) => notes.id !== idToDelete))
  };
  
  const getActiveNote = () => {
    return notes.find((notes) => notes.id === activeNote);
  };


  const onClearNote = () => {
    setNotes([]);
  }


  return (
    <div className="App">
      <Sidebar 
       notes={notes}
       onAddNote={onAddNote} 
       onDeleteNote={onDeleteNote}
       onClearNote={onClearNote}
       activeNote={activeNote}
       setActiveNote={setActiveNote} 
        />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
    
  );
};

export default App;
