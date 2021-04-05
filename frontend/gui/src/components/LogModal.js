import React from 'react';
import './LogModal.css'

const LogModal = ({handleClose, show, children}) => {
  const modalDisplayClass = show ? "modal display-modal" : "modal display-none";
  return(
    <div className={modalDisplayClass}>
      <section className="modal-main">
      <button type="button" onClick={handleClose}>
        close
        </button>
          {children}
        </section>

    </div>
  );
};

export default LogModal
