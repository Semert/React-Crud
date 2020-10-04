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
          <div className="user_avatar">
            <img src={avatar} alt={first_name} />
          </div>
          <div className="user_firstname">
            <p> {first_name}</p>
          </div>
          <div className="user_lastname">
            <p> {last_name}</p>
          </div>
          <div className="user_email">
            <p>{email}</p>
          </div>
          <hr style={{ height: 30 }}></hr>
          <div className="user_düzenle">
            <button
              className="modal-button"
              onClick={() => setModalIsOpen(true)}
            >
              Düzenle
            </button>
          </div>
          <div className="user_sil">
            <button
              className="modal-button-delete"
              onClick={() => setVisible((prev) => !prev)}
            >
              Sil
            </button>
          </div>
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
          <button
            style={{ width: "100px", height: "50px" }}
            onClick={() => setModalIsOpen(false)}
          >
            Kapat
          </button>
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
              background: "darkbrown",
              width: 400,
              height: 400,
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {" "}
          <div style={{ width: 300, height: 300 }}>
            <UserHandler userSil={userSil} id={id} setVisible={setVisible} />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default User;
