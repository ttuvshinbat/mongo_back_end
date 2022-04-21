const Food = require("../models/food");
const Users = require("../models/user");
const Basket = require("../models/basket");
function basket(req, res, next) {
  const data = req.body;
  if (data) {
    const user = Users.findOne({ email: data.user_email });
    if (user) {
      const data = req.body;
      if (data.quantity < 0) {
        data.quantity = 0
      }
      return Basket.create(data, function (err, data) {
        if (err) res.json({ success: false, data: err });
        else res.json({ success: true, data: data });
      });
    } else {
      return res.status(400).json({
        success: false,
        status: "hereglegch nevterj oroh shaardlagtai",
      });
    }
  }
}
function basket_info(req, res, next) {
  const data = req.body;
  if (data) {
    const user = Users.findOne({ email: data.user_email });
    if (user) {
      Basket.find({ user_email: data.user_email })
        .populate("order.food_id")
        .exec(function (err, data) {
          if (err) res.json({ success: false, data: err });
          else res.json({ success: true, data: data });
        });
    }
  } else {
    return res.status(400).json({
      success: false,
      status: "hereglegch nevterj oroh shaardlagtai",
    });
  }
}

module.exports = {
  basket,
  basket_info,
};
