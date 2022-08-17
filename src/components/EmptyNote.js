import React from 'react';
import image from '../utils/not_found.png';

function EmptyNote() {
  return (
    <div>
      <div className="text-center">
        <img className="me-5" src={image} alt="not-found" />
      </div>
      <div className="text-center">
        <h5 className="text-danger">Notes Note Found</h5>
      </div>
    </div>
  );
}

export default EmptyNote;
