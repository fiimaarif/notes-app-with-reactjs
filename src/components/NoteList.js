import React from 'react';
import EmptyNote from './EmptyNote';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
  render() {
    return this.props.notes.length > 0 ? (
      <div className="row gap-1 d-fex justify-content-center">
        {this.props.notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={this.props.onDelete}
            onArchive={this.props.onArchive}
            {...note}
          />
        ))}
      </div>
    ) : (
      <EmptyNote />
    );
  }
}

export default NoteList;
