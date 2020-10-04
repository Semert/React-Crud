import React from "react";
import "./UserHandler.css";
function UserHandler({ userSil, id }) {
  return (
    <div className="user-handler">
      <button
        onClick={() => {
          userSil(id);
        }}
      >
        Sil
      </button>
    </div>
  );
}

export default UserHandler;
