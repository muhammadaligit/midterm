import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const sampleData = [
    // Your sample data here...
  ];

  const [data, setData] = useState(sampleData);
  const [age, setAge] = useState("");
  const [name, setNameFilter] = useState("");

  // Function to apply filters
  const applyFilters = () => {
    const filteredData = sampleData.filter((item) => {
      // Check if the name includes the name filter text
      const nameMatch = item.name.toLowerCase().includes(nameFilter.toLowerCase());

      // Check if the age is greater than or equal to the age filter value
      const ageMatch = item.age >= parseInt(ageFilter, 10);

      return nameMatch && ageMatch;
    });

    setData(filteredData);
  };

  return (
    <>
      <h1 className="text-bg-dark">Muhammad Ali</h1>
      <div className="table-responsive">
        {/* Filter inputs */}
        <div className="mb-3">
          <label htmlFor="nameFilter" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameFilter"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ageFilter" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="ageFilter"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={applyFilters}>
          Apply Filters
        </button>

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
            {data.map((item) => (
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
    </>
  );
};

export default App;
