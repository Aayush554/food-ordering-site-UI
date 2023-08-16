import React from "react";
import { Alert } from "../../components/elements/Alert";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  navigate(""); // Call navigate outside of JSX
  return (
    <div className="max-w-lg mx-auto p-4">
      <Alert variant="success">Your payment was successful</Alert>
    </div>
  );
};

export default PaymentSuccess;
