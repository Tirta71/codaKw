import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./FormDetail.css";
import LoadingAnimation from "../../../Loading/LoadingSpinner";
import DetailPembayaranItem from "./DetailPembayaranItem";
import FormNotifPembayaran from "./FormNotifPembayaran";

export default function FormDetailPembayaran() {
  const location = useLocation();
  const data = location.state;
  const [timer, setTimer] = useState(
    localStorage.getItem("timer") ? Number(localStorage.getItem("timer")) : 600
  );
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [status, setStatus] = useState(null);
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
  const [randomDecimal, setRandomDecimal] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          localStorage.setItem("timer", newTimer.toString());
          return newTimer;
        });
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
      localStorage.removeItem("timer");
      localStorage.removeItem("isPaid");
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, isTimerRunning]);

  const handleSudahBayar = async () => {
    setIsTimerRunning(false);
    localStorage.setItem("isPaid", "true");
    Swal.fire("Pembayaran sudah selesai", "", "success");

    try {
      const url = "https://64872d74beba629727902d80.mockapi.io/mobile-legend";
      await axios.post(url, {
        ...data,
        isPaymentSubmitted: true,
        status: false,
      });

      Swal.fire("Data berhasil dikirim!", "", "success");

      // Delete local storage after successful payment
      localStorage.removeItem("timer");
      localStorage.removeItem("isPaid");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Terjadi kesalahan saat mengirim data", "", "error");
    }
  };

  const formatTime = (time) => {
    if (time >= 60) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    } else {
      return `00:${time < 10 ? "0" + time : time}`;
    }
  };

  const handleLeavePage = () => {
    localStorage.removeItem("timer");
    localStorage.removeItem("isPaid");

    Swal.fire("Leaving the page...", "", "info").then((result) => {
      if (result.isConfirmed) window.location.href = "/";
    });
  };

  useEffect(() => {
    const isPaid = localStorage.getItem("isPaid");
    if (isPaid === "true") {
      setIsTimerRunning(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://64872d74beba629727902d80.mockapi.io/mobile-legend?transactionId=${data.transactionId}`;
        const response = await axios.get(url);

        if (response.data.length > 0) {
          setStatus(response.data[0].status);
          setIsPaymentSubmitted(response.data[0].isPaymentSubmitted);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [data.transactionId]);

  useEffect(() => {
    // Handle event when the tab is being closed
    const handleTabClose = () => {
      localStorage.removeItem("timer");
      localStorage.removeItem("isPaid");
    };

    // Add event listener to window beforeunload event
    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  useEffect(() => {
    const generateRandomDecimal = () => {
      const randomDecimal = Math.floor(Math.random() * 1000);
      return randomDecimal.toString().padStart(3, "0");
    };

    const randomDecimalValue = generateRandomDecimal();
    setRandomDecimal(randomDecimalValue);
  }, []);

  const addRandomDecimal = (price) => {
    const priceWithoutDecimal = Math.floor(price / 1000);
    return `${priceWithoutDecimal}.${randomDecimal}`;
  };

  return (
    <>
      <div className="detail-pembayaran-container">
        <h2 className="detail-pembayaran-title">Detail Pembayaran</h2>
        <div className="detail-pembayaran-item">
          <DetailPembayaranItem
            label="Transaction ID"
            value={data.transactionId}
          />
          {data.email && (
            <DetailPembayaranItem label="Email" value={data.email} />
          )}
          <DetailPembayaranItem
            label="Receive Email"
            value={data.receiveEmail ? "Yes" : "No"}
          />
          <DetailPembayaranItem
            label="Selected Diamond"
            value={`${data.selectedDiamond?.jumlah} Diamond`}
          />
          <DetailPembayaranItem label="Username" value={data.username} />
          <DetailPembayaranItem label="UserID" value={data.userId} />
          <DetailPembayaranItem label="ServerID" value={data.serverId} />
          <DetailPembayaranItem
            label="Metode Pembayaran"
            value={data.metodePembayaran}
          />
          <DetailPembayaranItem
            label="Bank"
            value="BCA : 8720649366 TIRTA SAMARA"
          />
          <DetailPembayaranItem
            label="Total Harga"
            value={addRandomDecimal(
              data.selectedDiamond.price
            ).toLocaleString()}
          />

          {status === false && (
            <DetailPembayaranItem label="Status" value="Pending" />
          )}
          {status === true && (
            <DetailPembayaranItem label="Status" value="Success" />
          )}

          <p>
            <br />
            Jangan meninggalkan page untuk melihat status anda
            <br />
            leave page data anda hilang semua
          </p>

          <div className="timer-container">
            {isTimerRunning && !isPaymentSubmitted ? (
              <p
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                Waktu Tersisa: {formatTime(timer)}
              </p>
            ) : (
              <p>
                Harap Tunggu Admin sedang mengecek pesanan anda
                <br />
                Proses 1 - 10 menit!!
              </p>
            )}
          </div>
          {!isPaymentSubmitted && (
            <button
              onClick={handleSudahBayar}
              disabled={
                !isTimerRunning || localStorage.getItem("isPaid") === "true"
              }
            >
              Sudah Bayar
            </button>
          )}

          <button onClick={handleLeavePage}>Leave Page</button>
        </div>

        {!isPaymentSubmitted && (
          <>
            <FormNotifPembayaran />
            <LoadingAnimation />
          </>
        )}
      </div>
    </>
  );
}
