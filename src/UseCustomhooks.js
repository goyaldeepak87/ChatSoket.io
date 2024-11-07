import React, { useReducer } from 'react';
import './App.css';

function App() {
  console.log("console.log1");

  let fetchData = new Promise((resolve, reject) => {
    fetch('https://api.example.com/data') // Use fetch to make an API call
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then(data => resolve(data)) // Resolve with the data
      .catch(error => reject(error)); // Reject if there's an error
  });

  fetchData.then((data) => {
    console.log("--->", data);
  }).catch((error) => {
    console.log(error);
  });

  console.log("console.log3");


  return (
    <div className="App">
      5454
    </div >
  );
}

export default App;
