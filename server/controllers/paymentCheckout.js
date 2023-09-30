const crypto = require("crypto");
const { instance } = require("../instances");

const checkout = async (req, res) => {
  let options = {
    amount: Number(req.body.amount) * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({ success: true, order });
};

const payment = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.razorpay_api_key_secret)
    .update(body.toString())
    .digest("hex");
  const isAutentic = expectedSignature === razorpay_signature;
  if (isAutentic) {
    res.redirect(`http://localhost:3000/paymentSuccess?reference=${razorpay_payment_id}`);
  } else {
    return res.json({ success: true });
  }
};

module.exports = { checkout, payment };
