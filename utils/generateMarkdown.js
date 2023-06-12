// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT (recommended)") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "GNU GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else {
    return ``;
  }
}

exports.renderLicenseBadge = renderLicenseBadge;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT (recommended)") {
    return `https://opensource.org/license/mit/`;
  } else if (license == "GNU GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  } else if (license == "GNU GPLv2") {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
  } else if (license == "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } else if (license == "ISC") {
    return `https://opensource.org/license/isc-license-txt/`;
  } else {
    return ``;
  }
}

exports.renderLicenseLink = renderLicenseLink;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licensee) {
  if (license == "MIT (recommended)") {
    return `Copyright 2023 ${licensee}

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the “Software”),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license == "GNU GPLv3") {
    return `Copyright (C) 2023  ${licensee}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
`;
  } else if (license == "GNU GPLv2") {
    return `Copyright (C) 2023  ${licensee}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
`;
  } else if (license == "Apache") {
    return `
    Copyright 2023 ${licensee}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else if (license == "ISC") {
    return `Copyright 2023 ${licensee}

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
    OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    `;
  } else {
    return "";
  }
}

exports.renderLicenseSection = renderLicenseSection;

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseArr) {
  // console.log("here!");
  const newMarkdown = `# ${data.projectTitle}
  
  ${data.elevPitch}
  
  ${licenseArr[0]}
  
  ## Description
  
  ${data.whatIsIt}
  
  # Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributors](#contributors)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
      * ${data.instruction1}
      * ${data.instruction2}
      * ${data.instruction3}
      * ${data.instruction4}
  
  ## Usage
  
  ${data.useCase}
  
  ![${data.altText1}](./assets/images/image_1.jpg)
  ![${data.altText2}](./assets/images/image_2.jpg)
  
  ## License
  
   ${licenseArr[2]} -- For More Information, Please Visit ${licenseArr[1]}
  
  ## Contributors
  
  This project was built by ${data.credits}. If you would like to contribute to this project, please reach out to ${data.repoManager}.
  
  ## Questions
  
  Please don't hesitate to reach out to me at ${data.gitEmail} or open an issue on my repository (@${data.gitUser}) with any questions or bugs.
  
  - made using @corynko's readme generator -`;

  return newMarkdown;
}

exports.handleGenerate = generateMarkdown;
