import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
    if (userId && serverId) {
      setShowModal(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User ID dan Zone ID harus di isi",
      });
    }
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
            <div className="title-modal">
              <h1>Detail Pesanan</h1>
            </div>

            <div className="container-modal">
              <h2 className="h1-pembelian">
                Mohon konfirmasi Username anda sudah benar.
              </h2>
              <div className="username-id">
                {username && (
                  <p>
                    Username: <span>{username} </span>{" "}
                  </p>
                )}

                {userId && serverId && (
                  <p>
                    ID:
                    <span>
                      {userId}({serverId})
                    </span>
                  </p>
                )}
                <p>
                  Diamond: <span>{selectedDiamond?.jumlah} </span>
                </p>
                <p>
                  Harga: <span>{selectedDiamond?.price} </span>
                </p>
              </div>

              <div className="total-pembayaran">
                <p>
                  Total Pembayaran{" "}
                  <span>Rp. {selectedDiamond?.price.toLocaleString()}</span>
                </p>
              </div>

              <div className="button-pembelian">
                <button onClick={closeModal}>Batalkan</button>
                <button onClick={submitModal}>Konfirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
