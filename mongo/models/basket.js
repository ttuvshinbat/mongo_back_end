const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  user_email: {
    type: String,
    ref: "user",
    required: [true, "Enter the uses"],
  },
  order: [
    {
      food_id: {
        type: Schema.Types.ObjectId,
        ref: "food",
        required: [true, "Enter the food_id!"],
      },
      quantity: {
        type: Number,
        minimum: 1,
        required: [true, "Enter the quantity"],
      },
    },
  ],
});
const Basket = mongoose.model("basket", BasketSchema);
module.exports = Basket;
