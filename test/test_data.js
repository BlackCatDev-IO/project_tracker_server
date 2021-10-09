const Job = require("../models/Jobs");

const model1 = new Job({
  jobCode: "C32434",
  jobTitle: "President of Ghana",
  eventLocation: "Bittle",
  setupTime: Date(2021, 9, 26, 6),
  eventStart: Date(2021, 9, 26, 8),
  eventEnd: Date(2021, 9, 26, 12),
  jobStatus: "setupNotYetBegun",
});

const model2 = new Job({
  jobCode: "C30643",
  jobTitle: "Harvard Hall Gala 2021",
  eventLocation: "Harvard Hall",
  setupTime: Date(2021, 9, 26, 7),
  eventStart: Date(2021, 9, 26, 9),
  eventEnd: Date(2021, 9, 26, 13),
  jobStatus: "setupNotYetBegun",
});

const model3 = new Job({
  jobCode: "C345689",
  jobTitle: "Harvard Fundraiser Dinner",
  eventLocation: "Dining Room",
  setupTime: Date(2021, 9, 26, 8),
  eventStart: Date(2021, 9, 26, 9),
  eventEnd: Date(2021, 9, 26, 11),
  jobStatus: "setupNotYetBegun",
});

const model4 = new Job({
  jobCode: "C323569",
  jobTitle: "Investor Meeting",
  eventLocation: "West Room",
  setupTime: Date(2021, 9, 26, 9),
  eventStart: Date(2021, 9, 26, 10),
  eventEnd: Date(2021, 9, 26, 14),
  jobStatus: "setupNotYetBegun",
});

const model5 = new Job({
  jobCode: "C323568",
  jobTitle: "Insurance Meeting",
  eventLocation: "TBD",
  setupTime: Date(2021, 9, 26, 9, 30),
  eventStart: Date(2021, 9, 26, 12),
  eventEnd: Date(2021, 9, 26, 13),
  jobStatus: "setupNotYetBegun",
});

const model6 = new Job({
  jobCode: "C29535",
  jobTitle: "Alumni Party",
  eventLocation: "Harvard Hall",
  setupTime: Date(2021, 9, 26, 15),
  eventStart: Date(2021, 9, 26, 20),
  eventEnd: Date(2021, 9, 26, 23),
  jobStatus: "setupNotYetBegun",
});

const testData = [model1, model2, model3, model4, model5, model6];

module.exports = testData;
