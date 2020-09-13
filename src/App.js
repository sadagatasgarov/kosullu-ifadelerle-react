import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const [girisYapildi, setGirisYapildi] = useState("");
  const handleChange = (e) => {
    setIsim(e.target.value);
  };
  const handleSubmit = (isim) => {
    isim.length < 6
      ? setHataMesaji("Kullanicinin ismi 6 karakterden az olmamali")
      : setHataMesaji("") || setGirisYapildi(true);
  };

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {/* {girisYapildi||<h3>Cikis yaptiniz</h3>}
{girisYapildi&&<h3>Giris yaptiniz</h3>}  */}

      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoshgeldiniz</h2>
          <button
            onClick={() => {
              setGirisYapildi(false);
            }}
          >
            Cikis yap
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="isminiz"
            value={isim}
            onChange={handleChange}
          />
          <button
            onClick={(e) => {
              handleSubmit(isim);
            }}
          >
            Giris
          </button>
          <br />
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giris yapiniz</h2>}
        </React.Fragment>
      )}
    </div>
  );
}
