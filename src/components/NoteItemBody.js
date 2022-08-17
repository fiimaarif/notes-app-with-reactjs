import React from 'react';

function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p>{createdAt}</p>
      <p className="card-text">{body}</p>
    </div>
  );
}

export default NoteItemBody;
