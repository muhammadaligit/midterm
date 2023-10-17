import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const App = () => {
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      occupation: "Engineer",
    },

    {
      id: 2,
      name: "Jane Smith",
      age: 30,
      city: "San Francisco",
      occupation: "Designer",
    },

    {
      id: 3,
      name: "Bob Johnson",
      age: 28,
      city: "Chicago",
      occupation: "Accountant",
    },

    {
      id: 4,
      name: "Alice Brown",
      age: 35,
      city: "Los Angeles",
      occupation: "Teacher",
    },

    {
      id: 5,
      name: "Charlie Wilson",
      age: 40,
      city: "Houston",
      occupation: "Doctor",
    },

    { id: 6, name: "Eva Davis", age: 22, city: "Miami", occupation: "Artist" },

    {
      id: 7,
      name: "Frank Miller",
      age: 32,
      city: "Seattle",
      occupation: "Software Engineer",
    },

    {
      id: 8,
      name: "Grace Taylor",
      age: 45,
      city: "Boston",
      occupation: "Lawyer",
    },

    {
      id: 9,
      name: "Henry Clark",
      age: 28,
      city: "Denver",
      occupation: "Marketing Manager",
    },

    {
      id: 10,
      name: "Ivy Adams",
      age: 33,
      city: "Atlanta",
      occupation: "Entrepreneur",
    },
  ];
  const [data, setData] = useState(sampleData);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState();
  const [occupation, setOccupation] = useState();

  const handleFilter = () => {
    let newData = data;

    if (name) {
      newData = newDataFilter((event) => event.name === name);
      console.log(newData);
    }

    if (age) {
      newData = newData.filter((event) => event.age === age);
      console.log(newData);
    }
    // const filteredData = sampleData.filter((item) => {
    //   const nameMatch = item.target.value;

    //   const ageMatch = item.target.value;

    //   return nameMatch && ageMatch;
    // });

    setData(newData);
    console.log(newData);
  };

  const handleReset = () => {
    setName("");
    setCity("");
    setOccupation("");
    setAge("");
    setData(data);
  };

  return (
    <>
      <h1 className=" text-bg-dark ">Muhamamd ali</h1>
      <div className="table-responsive">
        <table className="table">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Occupation</th>
            </tr>
          </thead>

          <tbody>
            {sampleData?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <select className="form-select mb-4 " aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="city">City</option>
        <option value="occuption">Occuption</option>
      </select>

      <button className="btn btn-primary" onClick={handleFilter}>
        {" "}
        Filter{" "}
      </button>

      <button className="btn btn-primary m-4" onClick={handleReset}>
        {" "}
        Reset{" "}
      </button>
    </>
  );
};

export default App;
