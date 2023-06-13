import React from "react";
import "./FormNotifPembayaran.css";

export default function FormNotifPembayaran() {
  return (
    <div className="form-notif-pembayaran">
      <p>
        Cara Bayar Transfer WAJIB Sesuai dengan Total Bayar, TANPA PEMBULATAN !!
      </p>

      <div className="container-notif">
        <span> Petunjuk Transfer ke Rekening BCA (m-BCA)</span>
        <ol className="transfer-instructions">
          <li>Masuk ke Aplikasi mobile m-BCA</li>
          <li>Pilih menu m-Transfer</li>
          <li>Pilih Daftar Transfer - Antar Rekening</li>
          <li>Masukkan nomor Rekening yang tertera di halaman transaksi</li>
          <li>
            Jika rekening sudah terdaftar, pilih menu Transfer - Antar Rekening
          </li>
          <li>Pilih nomor Rekening yang tertera</li>
          <li>
            Masukkan Jumlah Nominal (Harus sesuai dengan Total Bayar, JANGAN
            DIBULATKAN!)
          </li>
          <li>Klik OK, lalu masukkan PIN kamu dan Transfer</li>
          <li>Simpan bukti transfer</li>
        </ol>
      </div>
    </div>
  );
}
