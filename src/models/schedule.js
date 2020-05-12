const mongoose = require("../database");

const ScheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;
