import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

export default function App() {
  const [notes, setNotes] = useState(localStorage.getItem('react-notes-app-data') ? JSON.parse(localStorage.getItem('react-notes-app-data')) : [
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    }

  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        <div className='footer'>
          <p>
            Made with ❤️ by <a target='_blank' href='https://abdelkarimain.vercel.app'>@abdelkarimain0</a>
          </p>
          <p role='img' aria-label='github'>
              👉
              <a target='_blank' href='https://github.com/abdelkarimain0/NotesApp'>
                View on GitHub

              </a>
            </p>
        </div>
      </div>

    </div>
  );
}
