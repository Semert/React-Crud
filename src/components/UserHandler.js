import React from "react";
import "./UserHandler.css";
function UserHandler({ userSil, id, setVisible }) {
  return (
    <div className="user-handler">
      <p>Silmek istediğinize emin misiniz?</p>
      <button
        onClick={() => {
          userSil(id);
        }}
      >
        Sil
      </button>
      <div>
        <button onClick={() => setVisible(false)}>Vazgeç</button>
      </div>
    </div>
  );
}

export default UserHandler;
