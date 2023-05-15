const fs = require('fs');
const inquirer = require('inquirer');
const licenseBadge = require('./licenseBadge');

function generateMarkdown(data){
    `
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

![Screenshot README-preview](${data.image})

## Credits

${data.credits}

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## How to Contribute

${data.contribute}

## Tests

${data.test}

    `;
}

inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is the Title of the Project?',
    },
    {
        type:'input',
        name:'description',
        message:'What is the Description of the Project?',
    },
    {
        type:'input',
        name:'installation',
        message:'How is the Installation',
    },
    {
        type:'input',
        name:'usage',
        message:'What is the Usage of the Project?',
    },
    {
        type:'input',
        name:'image',
        message:'Add an image?',
    },
    {
        type:'input',
        name:'credits',
        message:'What are the Credits of the Project?',
    },
    {
        type:'input',
        name:'contribute',
        message:'Any Contributors?',
    },
    {
        type:'input',
        name:'test',
        message:'Any Tests?',
    },
]) 
.then((data)=>{
    const createReadme = generateMarkdown(data);

    fs.writeFile('README.md', createReadme, (err) => err ? console.error(err) : console.log('Successfully created README.md file!'))
});
