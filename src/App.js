import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./components/User";
import "./App.css";
import Modal from "react-modal";
import AddUser from "./components/AddUser";
Modal.setAppElement("#root");

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const userEkle = (yeni) => {
    axios
      .post("https://reqres.in/api/users", yeni)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    const newuser = [...users, yeni];
    setUsers(newuser);
    setVisible(false);
  };

  const userSil = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((res) => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.log(error));
  };

  const userEdit = (id, yeni) => {
    axios
      .put(`https://reqres.in/api/users/${id}`, yeni)
      .then((res) =>
        setUsers(users.map((user) => (user.id === id ? res.data : user)))
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.first_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <input
        className="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Isme göre arayın..."
      />
      <div className="yeni_kullanıcı">
        <button onClick={() => setVisible(true)}> Yeni Kullanıcı Ekle</button>
      </div>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
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
        <AddUser userEkle={userEkle} />
      </Modal>
      <div className="container">
        {filteredUsers.map((user, index) => (
          <User
            key={user.id}
            index={index}
            user={user}
            userEkle={userEkle}
            userSil={userSil}
            userEdit={userEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
