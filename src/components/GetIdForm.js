import React, { useState } from "react";

export default function GetIdForm({ setUsername, onSubmit }) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [showUsername, setShowUsername] = useState(false);

  const fetchUsername = async () => {
    try {
      const response = await fetch(
        `https://v1.apigames.id/merchant/M230213DIHV6649WV/cek-username/mobilelegend?user_id=${userId}${serverId}&signature=7e3d1b5350485f4307d2f2086c49cb95`
      );

      const data = await response.json();
      setResponse(data);
      setError(null);
      console.log(data);
      setShowUsername(true);
      if (data?.data?.username) {
        setUsername(data.data.username); // Mengirim data username ke komponen induk (FormDiamonds)
      }
    } catch (error) {
      setResponse(null);
      setError("Terjadi kesalahan saat mengambil data.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && serverId) {
      fetchUsername();
      onSubmit({ userId, serverId }); // Menjalankan fungsi onSubmit dan mengirimkan userId dan serverId
    }
  };

  return (
    <div className="luar">
      <div className="container-form">
        <div className="form-title">
          <span className="satu">1</span>
          <h2>Masukan User ID</h2>
        </div>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="CekId">
            Cek ID
          </button>
        </form>

        {showUsername && (
          <div className="username-info" style={{ marginTop: "2rem" }}>
            <p>Username: {response?.data?.username}</p>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        <span className="Footer-form">
          Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
          atas pada menu utama game. User ID akan terlihat dibagian bawah Nama
          Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan
          transaksi. Contoh: 12345678(1234). 150456760(2751)
        </span>
      </div>
    </div>
  );
}
