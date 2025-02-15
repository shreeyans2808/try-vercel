const express = require("express");
const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");

const router = express.Router();

router.route("/add-to-cart").post(addToCart);
router.route("/get-cart").get(getCart);
router.route("/update-cart").patch(updateCart);
router.route("/clear-cart").delete(clearCart);
router.route("/remove-from-cart/:medicineId").delete(removeFromCart);

module.exports = router;
