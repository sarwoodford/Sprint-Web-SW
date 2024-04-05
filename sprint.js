// Final sprint web dev project 
// Decription: to create, read and display a JSON file
// Author: Sara Woodford
// Date(s) : March 28, 2024 - 


// read json file 
fetch('sprint.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        readReport(data);
    })

.catch(error => {
    console.error('Fetch Operation Could Not Be Executed.', error);
});


// function to test that the json is being read and the console works 
function readReport(data){


    data.forEach(record => {
        console.log(record.FirstName);
        console.log(record.LastName);
        console.log(record.Age);
        console.log(record.FamilyMembers);
        console.log(record.HasKids);
    });
}

// function #1 which uses the records age to find their birth year 

function getBirthYear(record){
    const currYear = new Date().getFullYear();
    const birthYear = currYear - record.Age
    return `${record.FirstName} is ${record.Age} years old and was born in ${birthYear}`
}



// function #2 which prints whether the record has children or not and who their family members are 

function familyMemAndKids(record){
    switch (record.HasKids){
        case true:
            return `${record.FirstName} ${record.LastName} has children. Their family members are ${record.FamilyMembers}`;
            break;
        default:
            return `${record.FirstName} ${record.LastName} does not have children. Their family members are ${record.FamilyMembers}`;
            break;
    }
}


// function #3 which uses the records gender to find their pronouns 

function personPronouns(record) {
    switch(record.Gender){
        case "Female":
            return`${record.FirstName} is ${record.Gender}. Her pronouns are she/her.`;
            break;
        case "Male":
            return`${record.FirstName} is ${record.Gender}. His pronouns are he/him.`;
            break;
        default:
            return`${record.FirstName} is ${record.Gender}. Their pronouns are they/them`;
            break;
    }
}


// print all functions onto console and all person info onto HTML, separated by each individual person
fetch('sprint.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(record =>{
            console.log(personPronouns(record))
            console.log(familyMemAndKids(record))
            console.log(getBirthYear(record))
        const personInfo = `
        <h4> ${record.FirstName} ${record.LastName} </h4>
        ${getBirthYear(record)} </br>
        ${familyMemAndKids(record)} </br>
        ${personPronouns(record)} </br>
        `
        document.body.innerHTML += personInfo
        })
    })


function printRecords(data) {
    data.forEach(record => {

    });
};

