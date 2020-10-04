import React, { useState } from "react";
import Form from "./Form";
import "./User.css";
import Modal from "react-modal";
import UserHandler from "./UserHandler";

const User = ({ user, userEkle, userSil, userEdit, index }) => {
  const { id, email, first_name, last_name, avatar } = user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  /*<button onClick={() => userEkle(a)}>Ekle</button>*/
  /*
  <Form
  id={id}
  userEkle={userEkle}
  userSil={userSil}
  userEdit={userEdit}
></Form>
<div className="first-row">{index == 0 && "first name"}</div>
*/
  return (
    <>
      <div className="size">
        <div className="user">
          <img src={avatar} alt={first_name} />
          <hr style={{ height: 30, opacity: 0.5 }}></hr>
          <p> {first_name}</p>
          <hr style={{ height: 30, opacity: 0.5 }}></hr>
          <p> {last_name}</p>
          <hr style={{ height: 30, opacity: 0.5 }}></hr>
          <p>{email}</p>
          <hr style={{ height: 30 }}></hr>
          <button className="modal-button" onClick={() => setModalIsOpen(true)}>
            Düzenle
          </button>
          <button
            className="modal-button-delete"
            onClick={() => setVisible((prev) => !prev)}
          >
            Sil
          </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "gray",
            },
            content: {
              color: "orange",
              width: 500,
              height: 500,
              margin: "auto",
            },
          }}
        >
          {" "}
          <div className="form">
            <Form
              id={id}
              userEkle={userEkle}
              userSil={userSil}
              userEdit={userEdit}
            ></Form>
          </div>
          <button onClick={() => setModalIsOpen(false)}>Kapat</button>
        </Modal>
      </div>
      <div className="deneme">
        <Modal
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: {
              backgroundColor: "black",
            },
            content: {
              color: "orange",
              width: 400,
              height: 400,
              margin: "auto",
            },
          }}
        >
          {" "}
          <div style={{ width: 300, height: 300 }}>
            <p>Are you sure</p>
            <UserHandler userSil={userSil} id={id} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default User;
