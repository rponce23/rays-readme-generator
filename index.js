const fs = require('fs');
const inquirer = require('inquirer');
const licenseBadge = require('./licenseBadge')

function generateMarkdown(data){
   return `
# ${data.title}

## Description

${data.description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Images](#images)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Images

![Image](./images/${data.image}.jpg)

## Credits

${data.credits}

## License

${licenseBadge.badgeType(data.license)}

Click on the license badge to get more info about the license

## How to Contribute

${data.contribute}

## Tests

${data.test}

## Github link

[Github](${data.github})

## Email

[rponce@mac.com](mailto:${data.email})

    `;
}

inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is the Title of the Project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'What is the Description of the Project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'installation',
        message:'Provide installation instrucctions for the Project',
    },
    {
        type:'input',
        name:'usage',
        message:'Provide examples for use',
    },
    {
        type: 'confirm',
        name: 'confirmImage',
        message: 'Do you want to add an image?',
        default: true
    },
    {
        type:'input',
        name:'image',
        message:'Add the image name only (images should be stored in images folder)',
    },
    {
        type:'input',
        name:'credits',
        message:'What are the Credits of the Project?',
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Did you use a license?',
        default: true
    },
    {
        type:'list',
        name:'license',
        message:'Which license do you use for this project?',
        choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'MIT', 'Apache']
    },
    {
        type:'input',
        name:'contribute',
        message:'List the contributors on this project',
    },
    {
        type:'input',
        name:'test',
        message:'Did you run any Test?',
    },
    {
        type:'input',
        name:'github',
        message:'Please add your Github Link'
    },
    {
        type:'input',
        name:'email',
        message:'Please add your Email'
    },
]) 
.then((data)=>{
    const createReadme = generateMarkdown(data);
    console.log(createReadme);

    fs.writeFile('README.md', createReadme, (err) => 
    err ? console.error(err) : console.log('Successfully created README.md file!'))
});
