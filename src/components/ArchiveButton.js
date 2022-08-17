import React from 'react';

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="btn btn-primary btn-sm" onClick={() => onArchive(id)}>
      <i className="fa-solid fa-box-archive"></i>{' '}
      {archived ? 'Pindahkan' : 'Archive'}
    </button>
  );
}

export default ArchiveButton;
