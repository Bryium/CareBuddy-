import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientDashboard = () => {
  const showToast = () => toast("Hello, this is a toast message!");

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
      />
    </div>
  );
};

export default PatientDashboard;
