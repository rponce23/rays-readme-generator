const fs = require('fs');
const inquirer = require('inquirer');

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

