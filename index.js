const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require("./lib/Manager");

//const generatePage = require('./src/page-template');
//const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your team manager's employee ID #? (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an ID #!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email addess? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "What is your team manager's office #? (Required)",
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter an office #!');
            return false;
          }
        }
      },
    ])
}

const promptEmployees = managerData => {
  
    console.log(managerData);
    
      // If there's no 'employees' array property, create one
      if (!managerData.employees) {
        managerData.employees = [];
      }
      return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmAddMember',
                message: 'Would you like to add information for a new team member?',
                default: true
              },
              {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAddMember }) => confirmAddMember
              },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ])
        .then(employeeData => {
          managerData.employees.push(employeeData);
          if (employees.confirmAddEmployee) {
            return promptEmployees(managerData);
          } else {
            return managerData;
          }
        });
    };

promptUser()
  .then(promptEmployees)
  .then(managerData => {
    return generatePage(managerData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });