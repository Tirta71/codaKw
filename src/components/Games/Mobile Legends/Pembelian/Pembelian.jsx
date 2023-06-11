import React, { useState, useEffect } from "react";

export default function Pembelian({
  selectedDiamond,
  username,
  userId,
  serverId,
}) {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [receiveEmail, setReceiveEmail] = useState(false);

  const handleCheckBox1Change = () => {
    setCheckBox1(!checkBox1);
  };

  const handleCheckBox2Change = () => {
    setCheckBox2(!checkBox2);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReceiveEmailChange = () => {
    setReceiveEmail(!receiveEmail);
  };

  const handleBeliSekarang = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (receiveEmail) {
      // Kirim notifikasi atau lakukan aksi lainnya
      console.log("Menerima email promosi dan penawaran eksklusif");
    }
  }, [receiveEmail]);

  const submitModal = () => {
    console.log(email);
  };
  return (
    <div className="container-pembelian">
      <div className="container-form">
        <div className="form-title">
          <span className="satu">4</span>
          <h2>Beli!</h2>
        </div>
        <span>
          Optional: Jika anda ingin mendapatkan bukti pembayaran atas pembelian
          anda, harap mengisi alamat emailnya
        </span>
        <form action="" className="form-pembelian">
          <div className="input-pembelian">
            <input
              type="email"
              placeholder="Alamat Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="checkbox-pembelian">
            <div>
              <input
                type="checkbox"
                id="checkbox1"
                checked={checkBox1}
                onChange={handleCheckBox1Change}
              />
              <label htmlFor="checkbox1">
                Ya, saya mau menerima email promosi dan penawaran eksklusif dari
                Codashop.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="checkbox2"
                checked={checkBox2}
                onChange={handleCheckBox2Change}
              />
              <label htmlFor="checkbox2">
                Ya, Saya ingin menerima berita dan promosi melalui SMS atau
                Whatsapp
              </label>
            </div>
          </div>
          <div className="btn-pembelian">
            <button type="submit" onClick={handleBeliSekarang}>
              Beli Sekarang
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Konfirmasi Pembelian</h2>
            <p>Anda telah memilih:</p>
            <p>Email : {email}</p>
            <p>Diamond: {selectedDiamond?.jumlah}</p>
            <p>Harga: {selectedDiamond?.price}</p>
            {username && <p>Username: {username}</p>}
            {userId && <p>User ID: {userId}</p>}
            {serverId && <p>Server ID: {serverId}</p>}
            <div className="button-pembelian">
              <button onClick={closeModal}>Tutup</button>
              <button onClick={submitModal}>Bayar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
