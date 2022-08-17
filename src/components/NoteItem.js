import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';

export default function NoteItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div
      className="card col-12 col-lg-3 text-white bg-success mb-3"
      style={{ maxWidth: '18rem;' }}
    >
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <div className="card-footer d-flex justify-content-between">
        <div className="btn-delete">
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
        <div className="btn-archive">
          <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
      </div>
    </div>
  );
}
