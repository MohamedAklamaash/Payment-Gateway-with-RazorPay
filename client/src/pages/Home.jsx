import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
const Home = () => {
  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:5001/api/apikey");
      const {
        data: { order },
      } = await axios.post("http://localhost:5001/api/checkout", {
        amount,
      });
      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Mohamed Aklamaash",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/111295679?v=4",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5001/api/paymentVerification",
        prefill: {
          name: "Aklamaash",
          email: "aklamaashehsan@example.com",
          contact: "6369202355",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log("Async Error");
    }
  };

  return (
    <div>
      <Card
        amount={1000}
        imgSrc={
          "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        checkoutHandler={checkoutHandler}
      />
      <Card
        amount={1000}
        imgSrc={
          "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        checkoutHandler={checkoutHandler}
      />
    </div>
  );
};

export default Home;
