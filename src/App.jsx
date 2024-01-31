import { useState } from "react";
import "./App.css";

function App() {
  const [decimalNumber, setDecimalNumber] = useState(0);
  const [error, setError] = useState(""); // Hata mesajını tutmak için state

  // İkili sayıyı ondalık sayıya dönüştüren fonksiyon
  function binaryToDecimal(binary) {
    return parseInt(binary, 2);
  }

  // Input değerini işleyen fonksiyon
  function onChangeHandler(event) {
    const binaryValue = event.target.value; // Input'tan gelen ikili sayı değeri

    // Boş bir değer girildiğinde decimalNumber'ı 0 olarak ayarla
    if (binaryValue === "") {
      setDecimalNumber(0);
      setError(""); // Hata mesajını temizle
      return;
    }

    // Doğrulama: Yalnızca 0 veya 1 olmalı
    if (!/^[01]*$/.test(binaryValue)) {
      setError("Invalid Input. Please enter only '0' or '1'.");
      setDecimalNumber(0); // Hata olduğunda ondalık sayıyı sıfırla
      return;
    }

    const decimalValue = binaryToDecimal(binaryValue); // İkili sayıyı ondalık sayıya dönüştürme
    setDecimalNumber(decimalValue); // Ondalık sayı değerini state'e atama
    setError(""); // Hata yoksa hata mesajını temizle
  }

  return (
    <div className="container">
      <div className="container-title">
        <h1>BINARY TO DECIMAL CONVERTER</h1>
      </div>
      <div className="container-input">
        <label htmlFor="decimal">Decimal Number: </label>
        <input id="decimal" type="text" onChange={onChangeHandler} />
      </div>
      <div className="container-error">
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      </div>
      <div className="container-output">
        <h3>Decimal Output:</h3>
        <h3>{decimalNumber}</h3> {/* Dönüştürülen ondalık sayıyı gösterme */}
      </div>
    </div>
  );
}

export default App;
