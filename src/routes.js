const express = require("express");
const routes = express.Router();
const ScheduleController = require("./controllers/ScheduleController");

routes.get("/", function (req, res) {
  res.status(400).send("Wrong end-point");
});

routes.get("/calendar", ScheduleController.listSchedules);
routes.post("/newschedule", ScheduleController.saveSchedule);
routes.delete("/schedule", ScheduleController.deleteSchedule);

module.exports = routes;
