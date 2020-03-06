const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

function getQuestions() {
    
    inquirer.prompt([
    {
        message: "What is your Github username?",
        name: "gitUserName"
    },
    {
        message: "What is your project title?",
        name: "projTitle"
    },
    {
        message: "Describe this project:",
        name: "projDesc"
    },
    {
        message: "What is this project used for?",
        name: "projUsage"
    },
    {
        type: 'checkbox',
        message: "What type of license do you want for your project?",
        name: "projLic",
        choices: ["MIT", "GNU GPUv3","Apache 2.0"]
    }
])
};

function writeToFile(fileName, data) {
}

function init() {
    getQuestions();
}

init();




// async function getInfo() {
//     try {
//       const name = await inquirer.prompt({
//         message: "What is Your Name?",
//         name: "name"
//       });
//       const location = await inquirer.prompt({
//         message: "What Do You Reside?",
//         name: "location"
//       });
//       const bio = await inquirer.prompt({
//         message: "Tell Me About Yourself:",
//         name: "bio"
//       });
//       console.log(name, location, bio);

//       generateHTML(name, location, bio);
    
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function generateHTML(name, location, bio) {
//     console.log(name, location, bio);
//     indexContent = 
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>${(name.name)} Homepage</title>
//     </head>
//     <body>
//         <h1>Hello My Name Is ${(name.name)}.</h1>
//         <h3>I live in ${location.location}.</h3>
//         <h5>${bio.bio}</h5>
//     </body>
//     </html>`

//     console.log()

//     fs.writeFile("index.html", indexContent, err => {
//         if (err) {
//             throw err;
//         }
//     })
//   }
  
//   getInfo();