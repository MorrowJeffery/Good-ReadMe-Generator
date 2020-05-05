const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const getLicenense = require("./license.js")

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
    },
    {
        message: "Instalation Instructions?",
        name: "projInstruct"
    },
    {
        message: "Who are the contributors?",
        name: "projContribute"
    },
    {
        message: "Tests to run?",
        name:"projTests"
    },
    {
        message: "What should users do with questions?",
        name: "projQuestions"
    }
])
.then (answers=> {
    compileInfo(answers);
})
};

function writeToFile(fileName, data) {
}

function compileInfo(answerObj) {
    axios.get(`https://api.github.com/users/${answerObj.gitUserName}`)
    .then  (function(response) {
        //console.log(response);
        var readMe = "";
        var personImage = `<img src = '${response.data.avatar_url}' height="42" width="42"> <br>`;
        var projTitle = `<h1>${answerObj.projTitle}</h1> <br>`;
        var desc = `<h3>Description:</h3> <br> ${answerObj.projDesc}`;
        var Initi = `<h3>Instilation: </h3> <br> ${answerObj.projInstruct}`;
        var use = `<h3>Uses: </h3> <br>${answerObj.projUsage}`
        var licen = `<h3>License:</h3> <br> ${getLicenense.get(answerObj.projLic, response.data.name)}`;
        var contri = `<h3>Contributors:</h3> <br> ${answerObj.projContribute}`;
        var tests = `<h3>Tests:</h3> <br> ${answerObj.projTests}`;
        var questions = `<h3>Questions?</h3> <br> ${answerObj.projQuestions}`

        readMe += personImage + projTitle + desc + Initi + use + contri + tests + questions +  `<h3>Email: </h3> <br> ${response.data.email}` + licen;



        fs.writeFile("GeneratedREADME.md", readMe, err => {
            console.log("README Created Successfully as 'GeneratedREADME'");
            if (err) {
                throw err;
        }
    })
    }
    )
}

//getQuestions();
getQuestions();




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