import Modal from "react-modal";
import React, { useState } from "react";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const View = ({ elements }) => {
  // console.log("data",elements)
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const EditId = elements.id;
  const [editUser, setEditUser] = useState({
    name: elements.name,
    userName: elements.username,
    emailId: elements.email,
    phone: elements.phone,
  });
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-primary m-2 "
        onClick={openModal}
      >
       <i class="fas fa-eye"></i> View
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{elements.id}</th>
              <td>{elements.name}</td>
              <td>{elements.username}</td>
              <td>{elements.email}</td>
              <td>{elements.phone}</td>
            </tr>
          </tbody>
        </table>
        <button
              type="button"
              onClick={closeModal}
              class="btn btn-danger m-2"
            >
              Cancel
            </button>
      </Modal>
    </>
  );
};

export default View;
