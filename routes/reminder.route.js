const express = require("express");
const router = express.Router();

const {
  addAReminder,
  recieveAReminder,
  getAllReminders,
  updateAReminder,
  changeSomeReminder,
  stopAReminder,
  reminderByPagination,
} = require("../controllers/reminder.controller");

const multerForImage = require("../libs/multer");

router.post("/reminder", multerForImage.single("images"), addAReminder);
router.get("/reminders/:id", recieveAReminder);
router.get("/reminders", getAllReminders);
router.get("/reminderByPagination", reminderByPagination);
router.put("/reminder/:id", updateAReminder);
router.patch("/reminder/:id", changeSomeReminder);
router.delete("/reminders/:id/stop", stopAReminder);

module.exports = router;
