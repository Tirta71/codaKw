import React, { useState, useEffect } from "react";
import "../css/Form/FormId.css";
import FormDiamonds from "./Games/Mobile Legends/Form Diamonds/FormDiamonds";

function GetIdForm() {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk memanggil API dan mendapatkan username
    const fetchUsername = async () => {
      try {
        const response = await fetch(
          `https://v1.apigames.id/merchant/M230213DIHV6649WV/cek-username/mobilelegend?user_id=${userId}${serverId}&signature=7e3d1b5350485f4307d2f2086c49cb95`
        );

        const data = await response.json();
        setResponse(data);
        setError(null);
        console.log(data);
      } catch (error) {
        setResponse(null);
        setError("Terjadi kesalahan saat mengambil data.");
      }
    };

    if (userId && serverId) {
      fetchUsername(); // Panggil fungsi fetchUsername jika userId dan serverId tidak kosong
    }
  }, [userId, serverId]);

  return (
    <div className="luar">
      <div className="container-form">
        <div className="form-title">
          <span className="satu">1</span>
          <h2>Masukan User ID</h2>
        </div>
        <form>
          <input
            type="text"
            id="user_id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            placeholder="Masukan User ID"
          />

          <input
            type="text"
            id="server_id"
            value={serverId}
            onChange={(e) => setServerId(e.target.value)}
            required
            placeholder="Zone ID"
          />
        </form>

        {response && response.data && response.data.username ? (
          <div className="username-info" style={{ marginTop: "0.5rem" }}>
            <p>Username : {response.data.username}</p>
          </div>
        ) : (
          <div className="username-info">
            <p>Username tidak ada</p>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        <span className="Footer-form">
          Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
          atas pada menu utama game. User ID akan terlihat dibagian bawah Nama
          Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan
          transaksi. Contoh: 12345678(1234).
        </span>
      </div>
      <FormDiamonds />
    </div>
  );
}

export default GetIdForm;
