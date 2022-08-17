import React from 'react';

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="btn btn-danger btn-sm"
      onClick={() => {
        let confirmation = window.confirm(
          'Are you sure you want to delete this note ?'
        );
        if (confirmation) {
          onDelete(id);
        }
      }}
    >
      <i className="fa-solid fa-trash"></i> Delete
    </button>
  );
}

export default DeleteButton;
