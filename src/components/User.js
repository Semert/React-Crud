import React, { useState } from "react";
import Form from "./Form";
import "./User.css";
import Modal from "react-modal";
import UserHandler from "./UserHandler";

Modal.setAppElement("#root");
const User = ({ user, userEkle, userSil, userEdit, index }) => {
  const { id, email, first_name, last_name, avatar } = user;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {index == 0 && (
        <>
          <div className="first-row">
            {" "}
            <div>Avatar </div> <div>Ad-Soyad </div> <div> Email</div>{" "}
            <div></div> <div style={{ marginRight: 30 }}> Aksiyonlar </div>{" "}
          </div>
        </>
      )}

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
              className="modal_button"
              onClick={() => setModalIsOpen(true)}
            >
              Düzenle
            </button>
          </div>
          <div className="user_sil">
            <button
              className="modal_button_delete"
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
              background: "darkbrown",
              borderRadius: 30,
            },
          }}
        >
          {" "}
          <div className="form">
            <Form
              id={id}
              user={user}
              userEkle={userEkle}
              userSil={userSil}
              userEdit={userEdit}
            ></Form>
          </div>
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
