import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminCek.css";
import MyNavbar from "../components/navbar/MyNavbar";

export default function AdminCek() {
  const [data, setData] = useState([]);
  const baseUrl = "https://64872d74beba629727902d80.mockapi.io/mobile-legend/";
  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateStatus = async (id) => {
    try {
      await axios.put(`${baseUrl}${id}`, {
        status: true,
      });
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await axios.delete(`${baseUrl}${id}`);
      fetchData();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="admin-cek-container">
        <h2 className="admin-cek-title">Mobile Legend Data</h2>
        {data !== null && data.length > 0 && (
          <table className="admin-cek-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Transaksi ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>ID Games</th>
                <th>Jumlah Diamond</th>
                <th>Status</th>
                <th>Total Bayar</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    {item.userId} ({item.serverId})
                  </td>
                  <td>{item.selectedDiamond.jumlah} Diamond</td>
                  <td>{item.status ? "Success" : "Pending"}</td>
                  <td>Rp. {item.totalBayar}</td>
                  <td>
                    {item.status ? (
                      <button
                        className="admin-cek-delete-btn"
                        onClick={() => handleDeleteData(item.id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button
                        className="admin-cek-update-btn"
                        onClick={() => handleUpdateStatus(item.id)}
                      >
                        Update Status
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
