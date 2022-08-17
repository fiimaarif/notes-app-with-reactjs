import React from 'react';

function AddButton({ onAdd }) {
  return (
    <button
      className="btn btn-warning rounded-pill mt-2 fixed-bottom mb-5 me-5 ms-auto"
      onClick={onAdd}
      style={{ width: '80px', height: '80px' }}
    >
      <i className="fa-solid fa-plus fa-2xl"></i>
    </button>
  );
}

export default AddButton;
