const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Job = require(__dirname + "/models/Jobs");
const testData = require(__dirname + "/test/test_data");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/harvard_club", (err) => {
  console.log(err ? err : "connected to MongoDB");
});

mongoose.set("returnOriginal", false);

app.get("/", (req, res) => {
  Job.find({}, (err, jobs) => {
    /// this is just inserting test data for now to confirm that the app can see and
    /// edit the contents of the MongoDB collection via a standard GET and PUT request
    /// Adding a brand new Job via POST would only happen from admin panel on website
    if (jobs.length === 0) {
      Job.insertMany(testData, (err) => {
        console.log(
          err ? err : "Succesfully insert starter job list into hc db"
        );
      });
    }

    /// Just returning json data for now so I can quickly confirm that PUT
    /// from the app is working
    res.send(jobs);
  });
});

app.put("/", function (req, res) {
  const id = req.body._id;
  Job.replaceOne({ _id: id }, req.body, function (err, response) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.redirect("/");
      console.log("Job at id:" + id + " successfully updated");
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
