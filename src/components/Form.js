import React, { useState } from "react";
import "./Form.css";

const Form = ({ userEkle, userSil, userEdit, id, user }) => {
  const initial_state = {
    id: (Math.random() * 100).toFixed(2),
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    avatar: user.avatar,
  };
  const [kullanıcı, setKullanıcı] = useState(initial_state);
  console.log(user);
  const handleUser = (e) => {
    setKullanıcı({ ...kullanıcı, [e.target.name]: e.target.value });
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
      <div>
        <div style={{ margin: "5px" }} className="button_edit">
          <button onClick={() => userEdit(id, kullanıcı)}>Düzenle</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
