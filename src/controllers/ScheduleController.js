const Cryptography = require("../lib/Cryptography");
const Schedule = require("../models/schedule");

module.exports = {
  async saveSchedule(req, res) {
    try {
      const { name, apartment, password, startDate, endDate } = req.body;

      const password_hash = await Cryptography.hash(password);

      await Schedule.create({
        name,
        apartment,
        password_hash,
        startDate,
        endDate,
      });

      const newSchedule = await Schedule.find().select("-password_hash");

      return res.status(201).json(newSchedule);
    } catch (e) {
      return res.status(400).send({ error: "Error saving the request" });
    }
  },

  async listSchedules(req, res) {
    try {
      const calendar = await Schedule.find().select("-password_hash");
      return res.send(calendar);
    } catch (e) {
      return res.status(400).send({ error: "Error listing the request" });
    }
  },

  async deleteSchedule(req, res) {
    try {
      const { _id, password } = req.body;
      const schedule = await Schedule.findById(_id);

      if (!(await Cryptography.compare(password, schedule.password_hash))) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      await Schedule.findByIdAndDelete(_id);
      const newSchedule = await Schedule.find().select("-password_hash");
      return res.send(newSchedule);
    } catch (e) {
      return res.status(400).send({ error: "Error deleting the request" });
    }
  },
};
