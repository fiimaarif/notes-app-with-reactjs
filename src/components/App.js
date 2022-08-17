import React from 'react';
import { getInitialData } from '../utils';
import AddButton from './AddButton';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTitle: '',
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onAddHandler() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('d-none');
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArchiveHandler(id) {
    const updateNote = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: updateNote });
  }

  onAddNoteHandler({ title, body }) {
    const now = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: now,
            title,
            body,
            archived: false,
          },
        ],
      };
    });
  }
  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchTitle: event.target.value,
      };
    });
  }
  render() {
    const searchTitle = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())
    );
    const activeNote = searchTitle.filter((note) => {
      return note.archived === false;
    });
    const archiveNote = searchTitle.filter((note) => {
      return note.archived === true;
    });
    return (
      <div>
        <Navbar onSearch={this.onSearchHandler} />
        <AddButton onAdd={this.onAddHandler} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <div className="container">
          <div className="row border-bottom border-success my-3">
            <h5 className="text-success text-custom text-center">
              Active Notes
            </h5>
          </div>
          <NoteList
            notes={activeNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <div className="row border-bottom border-success my-3 ">
            <h5 className="text-success text-custom text-center">Archive</h5>
          </div>
          <NoteList
            notes={archiveNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}
export default App;
