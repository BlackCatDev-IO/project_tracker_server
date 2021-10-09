const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobCode: String,
  jobTitle: String,
  eventLocation: String,
  description: String,
  setupTime: Date,
  eventStart: Date,
  eventEnd: Date,
  jobStatus: String,
});

module.exports = mongoose.model("Job", JobSchema);
