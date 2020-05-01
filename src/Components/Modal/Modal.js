import React, {Component} from 'react';
import './Modal.css';
const Modal = props => (

  <div className="modal">
      <header className="modal_header"><h1>{props.title}</h1></header>
    <section className="modal-content">
      {props.children}
    </section>
    <section className="modal_actions">
      { props.canConfirm && <button className="btn" onClick={props.confirmEvent}>Confirm</button>}
      {props.canCancel && <button className="btn" onClick={props.closeModal}>Cancel</button>}
    </section>
  </div>

);


export default Modal;
