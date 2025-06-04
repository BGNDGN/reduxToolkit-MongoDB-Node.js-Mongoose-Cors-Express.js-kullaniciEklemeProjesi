import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";
import Logos from "../logo/Logo.jsx";
import profileImg from '../assets/burak-profile.jpg';
import "../css/MainPage.css";

function MainPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mainForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("Tüm alanlar doldurulmalıdır.");
      return;
    }

    try {
      await dispatch(addUser({ name, email, age })).unwrap();

      alert("Kayıt başarıyla eklendi.");
      setName("");
      setEmail("");
      setAge("");
    } catch (error) {
      console.error("Hata oluştu:", error);
      alert("Kayıt eklenirken bir hata oluştu.");
    }
  };

  return (
    <div className="mainDiv">
      <div className="formDiv">
        <h2>Kullanıcı Kayıt Formu</h2>
        <form onSubmit={mainForm} className="mainForm">
          <label> Kullanıcı Adı:
            <input
              type="text"
              value={name}
              placeholder="Adınızı girin"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label> Kullanıcı E-mail:
            <input
              type="email"
              value={email}
              placeholder="Email adresinizi girin"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label> Kullanıcı Yaş:
            <input
              type="number"
              value={age}
              placeholder="Yaşınızı girin"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <button type="submit">Kullanıcıyı Kaydet</button>
        </form>

        <button className="registerButton" onClick={() => navigate("/registerUsers")}>
          Kayıtlı Kullanıcıları Görüntüle
        </button>
      </div>

      <div className="photographDiv">
        <img className="photograph" src={profileImg} alt="Profil" />
        <p className="name"><strong>Burak Gündoğan</strong></p>
        <p className="socialPlatformName">Sosyal Medyalarım ve Projelerimin Bulunduğu Github Platformum</p>
        <Logos />
      </div>
    </div>
  );
};

export default MainPage;
