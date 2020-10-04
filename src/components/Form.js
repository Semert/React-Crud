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
      <label className="label">Email</label>
      <input
        type="text"
        name="email"
        value={kullanıcı.email}
        onChange={handleUser}
        placeholder="Email"
      ></input>
      <label className="label">Ad</label>
      <input
        type="text"
        name="first_name"
        value={kullanıcı.first_name}
        onChange={handleUser}
        placeholder="Ad"
      ></input>
      <label className="label">Soy Ad</label>
      <input
        type="text"
        name="last_name"
        value={kullanıcı.last_name}
        onChange={handleUser}
        placeholder="Soy ad"
      ></input>
      <div className="button">
        <div className="button_submit" style={{ margin: "5px" }}>
          <button type="submit" onClick={handleSubmit}>
            Kaydet
          </button>
        </div>
        <div style={{ margin: "5px" }} className="button_sil">
          <button onClick={() => userSil(id)}>Sil</button>
        </div>
        <div style={{ margin: "5px" }} className="button_edit">
          <button onClick={() => userEdit(id, kullanıcı)}>Düzenle</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
