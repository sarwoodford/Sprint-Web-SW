// Final sprint web dev project 
// Decription: to create, read and display a JSON file
// Author: Sara Woodford
// Date(s) : March 28, 2024 - 

fetch('sprint.json')
  .then(response => response.json())
  .then(report => {
    console.log(data);
    readReport(data);
  })

function readReport(data) {
  data.forEach(record => {
    console.log("First Name:" , record.FirstName);
  })
}
    
