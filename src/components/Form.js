import React, { useState } from "react";
import "./Form.css";

const initial_state = {
  id: (Math.random() * 100).toFixed(2),
  email: "",
  first_name: "",
  last_name: "",
  avatar: "",
};

const Form = ({ userEkle, userSil, userEdit, id }) => {
  const [kullanıcı, setKullanıcı] = useState(initial_state);

  const handleUser = (e) => {
    setKullanıcı({ ...kullanıcı, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userEkle(kullanıcı);
  };
  return (
    <div className="inputs">
      <input
        type="text"
        name="email"
        value={kullanıcı.email}
        onChange={handleUser}
      ></input>

      <input
        type="text"
        name="first_name"
        value={kullanıcı.first_name}
        onChange={handleUser}
      ></input>

      <input
        type="text"
        name="last_name"
        value={kullanıcı.last_name}
        onChange={handleUser}
      ></input>

      <input
        type="text"
        name="avatar"
        value={kullanıcı.avatar}
        onChange={handleUser}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        haha
      </button>
      <button onClick={() => userSil(id)}>Sil</button>
      <button onClick={() => userEdit(id, kullanıcı)}>Düzenle</button>
    </div>
  );
};

export default Form;
