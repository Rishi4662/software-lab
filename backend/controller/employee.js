const Employee = require("../models/employee");

exports.create = (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  });
  newEmployee
    .save()
    .then(() => {
      res.json({
        status: "ok",
        msg: "Employee Created",
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.delete = (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({
        status: "ok",
        msg: "Employee Deleted!",
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.view = (req, res) => {
  Employee.find().then((emps) => {
    if (emps.length === 0) {
      res.json({
        status: "error",
        msg: "No Employee Found!",
      });
    } else {
      res.json({
        status: "ok",
        employees: emps,
      });
    }
  });
};
