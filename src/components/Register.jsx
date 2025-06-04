import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/usersSlice";
import "../css/Register.css";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        alert("Kullanıcı başarıyla silindi.");
      })
      .catch(() => {
        alert("Kullanıcı silinirken hata oluştu.");
    });
  };

  if (status === "loading") return <p>Yükleniyor...</p>;
  if (status === "failed") return <p>Hata: {error}</p>;

  return (
    <div className="registerDiv">
      <h2>Kayıtlı Kullanıcılar</h2>

      {users.length === 0 ? (
        <p>Henüz kayıtlı kullanıcı yok.</p>
      ) : (
        users.filter(user => user && user.name).map((user) => (
          <div className="userDiv" key={user._id}>
            <p><strong>Ad:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Yaş:</strong> {user.age}</p>
            <button onClick={() => handleRemove(user._id)}>Listeden ve veritabanından sil</button>
          </div>
        ))
      )}

      <button className="mainPageButton" onClick={() => navigate("/")}>
        Kullanıcı Kaydet Sayfasına Dön
      </button>
    </div>
  );
}

export default Register;
