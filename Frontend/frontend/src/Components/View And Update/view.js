import React, { useState, useEffect } from "react";

function View(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const fetchData = () => {
    fetch("http://localhost:5000/employee")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.employees);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  
  if(props.willRefresh){
    fetchData();
    props.setRefresh(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEmployee = (empId) => {
    console.log("delete");
    fetch(`http://localhost:5000/employee/${empId}`, {
      method: "DELETE",
    }).then((res) => {
      const del = items.filter((item) => empId !== item._id);
      setItems(del);
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {!items || items.length === 0 ? (
          <div>
            <h2>"NO employee Found!"</h2>
          </div>
        ) : (
          <table width="80%" className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteEmployee(item._id);
                        }}
                        className="btn btn-block btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default View;
