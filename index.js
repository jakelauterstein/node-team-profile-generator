const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require("./lib/Manager.js");
const teamMembers = [];
const generatePage = require("./src/page-template.js");
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site');

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID #? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID #!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email addess? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office #? (Required)",
        validate: officeNumber => {
          if (officeNumber) {
            return true;
          } else {
            console.log('Please enter their office #!');
            return false;
          }
        }
      },
    ])
    .then(answers => {
      console.log(answers);
      const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      
    })
  }


  const promptAddMember = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: "Would you like to add an intern, an engineer, or finish building your team? (Required)",
        choices: ["Add Intern", "Add Engineer", "Skip and Finish Building Your Team"]
    }
    ])
    .then(userChoice => {
      switch (userChoice.menu) {
        case "Add Intern":
          promptIntern();
          break;
        
        case "Add Engineer":
          promptEngineer();
          break;

        default:
          generateTeam()
      }
    });
  };

  const promptIntern = () => {
    console.log("Add an intern:");

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID #? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID #!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email addess? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the intern's school name? (Required)",
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log('Please enter their school name!');
            return false;
          }
        }
      }
    ])
    .then(answers => {
      console.log(answers);
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamMembers.push(intern)
      promptAddMember();
    })
  }

  const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter their name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID #? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter their ID #!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email addess? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter their email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github? (Required)",
        validate: school => {
          if (school) {
            return true;
          } else {
            console.log('Please enter their github!');
            return false;
          }
        }
      }
    ])
    .then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer)
      promptAddMember();
    })
  }

  const generateTeam = () => {
    console.log(`
    =====================
    Below is your team!
    =====================
      `);
    console.log(teamMembers);
    
    teamInfoOutput(teamMembers)

    
  }

  const teamInfoOutput = teamInfo => {
    const pageHTML = generatePage(teamInfo);

    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    })
  }
    


  promptManager()
    .then(promptAddMember)
      














































      //       {
//         type: 'list',
//         name: 'addOrFinish',
//         message: "Would you like to add an intern, an engineer, or finish building your team? (Required)",
//         choices: ["Add Intern", "Add Engineer", "Skip and Finish Building Your Team"]
//       }
//     ])
//     .then(answers => {
//       console.log(answers);
//     })
// }

// const promptEmployees = managerData => {
  
//     console.log(managerData);
    
//       // If there's no 'employees' array property, create one
//       if (!managerData.employees) {
//         managerData.employees = [];
//       }
//       return inquirer
//         .prompt([
//             {
//                 type: 'confirm',
//                 name: 'confirmAddMember',
//                 message: 'Would you like to add information for a new team member?',
//                 default: true
//               },
//               {
//                 type: 'input',
//                 name: 'about',
//                 message: 'Provide some information about yourself:',
//                 when: ({ confirmAddMember }) => confirmAddMember
//               },
//           {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a description of the project (Required)',
//             validate: descriptionInput => {
//               if (descriptionInput) {
//                 return true;
//               } else {
//                 console.log('You need to enter a project description!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'checkbox',
//             name: 'languages',
//             message: 'What did you this project with? (Check all that apply)',
//             choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//           },
//           {
//             type: 'input',
//             name: 'link',
//             message: 'Enter the GitHub link to your project. (Required)',
//             validate: linkInput => {
//               if (linkInput) {
//                 return true;
//               } else {
//                 console.log('You need to enter a project GitHub link!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'confirm',
//             name: 'feature',
//             message: 'Would you like to feature this project?',
//             default: false
//           },
//           {
//             type: 'confirm',
//             name: 'confirmAddProject',
//             message: 'Would you like to enter another project?',
//             default: false
//           }
//         ])
//         .then(employeeData => {
//           managerData.employees.push(employeeData);
//           if (employees.confirmAddEmployee) {
//             return promptEmployees(managerData);
//           } else {
//             return managerData;
//           }
//         });
//     };

// // promptUser()
// //   .then(promptEmployees)
// //   .then(managerData => {
// //     return generatePage(managerData);
// //   })
// //   .then(pageHTML => {
// //     return writeFile(pageHTML);
// //   })
// //   .then(writeFileResponse => {
// //     console.log(writeFileResponse);
// //     return copyFile();
// //   })
// //   .then(copyFileResponse => {
// //     console.log(copyFileResponse);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });


// .then(teamMembers => {
//   return generatePage(teamMembers);
// })
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
//   return copyFile();
// })
// .then(copyFileResponse => {
//   console.log(copyFileResponse);
// })
// .catch(err => {
//   console.log(err);
// });