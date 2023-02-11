import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Kc2oeFtKd0LnQ6NYIMy39xPPUqZwm2PmTjgQL0PgUFyU8RNdXeECi2Ks3QMrOKwFw95gs4S1fMQMhok52ECqOnm00bHW4eeEk"
);

const Payment = () => {
  const [userInfo, setUserInfo] = useState({});
  const { appointmentID } = useParams();
  useEffect(() => {
    axios
      .get(`https://health-services.vercel.app/appointment/${appointmentID}`)
      .then((res) => {
        setUserInfo(res.data);
      });
  }, [appointmentID]);
  return (
    <div>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        Pay for booking appointment
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 1,
        }}
      >
        You will be paid : ${userInfo.price}
      </Typography>

      {/* -------------!stripe starts--------------- */}
      {userInfo.price && (
        <Elements stripe={stripePromise}>
          <CheckOut userInfo={userInfo} />
        </Elements>
      )}
      {/* --------------!stripe ends---------------- */}
    </div>
  );
};

export default Payment;

/* 
install stripe 
set publish-able key
Elements
CheckOut form
-------------
create payment method
*/
