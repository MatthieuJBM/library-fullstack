import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NuIRLCiAbBOFqzAQxFUwESX4J9Twg5ytXPQf8xEAdFytTC2m5sKZ9LuwPcT6Fp0xgAl6QhhXzSMDuQ4LMMMcfcQ003tmFnO7J"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
  //</React.StrictMode>
);
