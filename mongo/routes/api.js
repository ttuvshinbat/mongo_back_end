const express = require("express");
const router = express.Router();
const Food = require("../models/food");
const User = require("../models/user");
const order = require("../models/order");
const auth = require("../middleware/auth");

const middleware = require("../middleware/create_update");
const foodController = require("../controller/foodController");
const userController = require("../controller/userController");
const orderController = require("../controller/orderController");

router.get("/foods", foodController.get_foods);
router.post(
  "/createfood",
  auth,
  middleware.createfood(),
  foodController.create_food
);
router.put("/updatefood/:id", foodController.updatefood);
router.delete("/deletefood/:id", foodController.deletefood);
router.get("/food/:id", foodController.food);
router.post("/createfoods", foodController.create_food);
router.get("/foodsearch", foodController.food_search);

router.get("/users", userController.get_users);
router.get("/user/:id", userController.user);
router.post(
  "/createuser",
  middleware.createuser(),
  userController.create_users
);
router.put("/updateuser/:id", userController.updateUser);
router.get("/usersearch", userController.user_search);
router.delete("/deleteuser/:id", userController.delete_user);

router.get("/orders", orderController.get_orders);
router.post(
  "/createorder",
  middleware.createorders(),
  orderController.create_orders
);
router.delete("/deleteorder/:id", orderController.delete_order);
router.put("/updateorder/:id", orderController.update_order);

module.exports = router;
