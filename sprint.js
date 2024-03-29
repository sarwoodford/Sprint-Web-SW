// Final sprint web dev project 
// Decription: to create, read and display a JSON file
// Author: Sara Woodford
// Date(s) : March 28, 2024 - 

fetch('sprint.json')
  .then(response => response.json())
  .then(report => {
    console.log(report);
    readReport(report);
  })

    
