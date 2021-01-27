const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeRoutes = require("./routes/employee");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected!");
}).catch((err)=>{
    console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/employee",employeeRoutes);


app.listen(port, () => {
  console.log("App running on port: " + port);
});
