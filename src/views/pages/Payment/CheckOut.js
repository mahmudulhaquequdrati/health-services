import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const CheckOut = ({ userInfo }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { price, patientName, _id } = userInfo;
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  // load client secret
  useEffect(() => {
    axios
      .post(
        "https://health-services-server.herokuapp.com/create-payment-intent",
        { price }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
    }

    // confirm card payment intent
    const { paymentIntent, error: IntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });
    if (IntentError) {
      setError(IntentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your Payment process successfuly!");
      setProcessing(false);

      // payment confirmed
      const payment = {
        transaction: paymentIntent.id,
        last4: paymentMethod.card.last4,
      };

      // now we will update info to database
      axios
        .put(
          `https://health-services-server.herokuapp.com/appointment/${_id}`,
          payment
        )
        .then((res) => {
          if (res.data.modifiedCount) {
            navigate("/dashboard/appointment");
          }
        });
    }
  };
  return (
    <div
      style={{
        margin: "30px 20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {processing ? (
            <CircularProgress />
          ) : (
            <button
              style={{
                color: "white",
                marginTop: 2,
                background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                padding: "10px 30px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              type="submit"
              disabled={!stripe || success}
            >
              Pay Now : ${price}
            </button>
          )}
        </div>
      </form>
      {success && (
        <p
          style={{
            textAlign: "center",
            color: "green",
          }}
        >
          {success}
        </p>
      )}
      {error && (
        <p
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckOut;
