import React, { useState } from "react";

function Create(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const appendEmployee = () => {
    console.log("Data is Entered");
    const newEmployee = {
      name: name,
      email: email,
      address: address,
    };
    fetch("http://localhost:5000/employee", {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.empCreated();
        setName("");
        setEmail("");
        setAddress("");
      });
  };
  return (
    <>
    <div className = "text-center">
            <h1 className ="text-danger">Enter Details</h1>
    </div>
        <br></br>
      <div className = "container">
        <div className = "row">
            <div className = "col-sm-2"></div>
            <div className = "col-sm-8">
            <div className="mb-3">
        <label for="nameFormControlInput1" class="form-label">
          NameName
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="emailFormControlInput1" class="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value= {address}
        >
         
        </textarea>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <button onClick={appendEmployee} className="btn btn-primary btn-block">Submit</button>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
            </div>
            <div className = "col-sm-2"></div>
        </div>
      </div>
    </>
  );
}
export default Create;
