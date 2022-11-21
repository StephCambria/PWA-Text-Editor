# PWA-Text-Editor
![License Badge](https://shields.io/badge/license-ISC-green)

[Deployed Application](https://cambria-jate.herokuapp.com/)


## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
A simple text editor app that works both in the browser and as a downloadable application. Utilizing [Webpack](https://webpack.js.org/), [Workbox](https://developer.chrome.com/docs/workbox/), and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), JATE is an app that follows the [Progressive Web Application](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) framework, enabling it to be used to its full functionality even without an internet connection.

## Installation
This application is deployed live via [Heroku](https://cambria-jate.herokuapp.com/).

## Usage
JATE is a single-page text editor that will save any input in the browser, online or offline, through the use of a [service worker](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#service_workers_explained):

<img width="1231" alt="jate-web" src="https://user-images.githubusercontent.com/107421370/203166435-06fa371a-8349-4eea-89d1-fc9c5037a210.png">

<img width="1152" alt="sw" src="https://user-images.githubusercontent.com/107421370/203166476-17d3e7a8-2f73-40d4-b8a6-a1cfce8ea5bd.png">

<img width="1152" alt="sw-offline" src="https://user-images.githubusercontent.com/107421370/203166498-2f9c1cb3-1bad-46df-b8da-c08098d60894.png">

[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) stores and retrieves all of the data:

<img width="1153" alt="index" src="https://user-images.githubusercontent.com/107421370/203166996-bb079ceb-594a-4464-b528-68a19d347a4d.png">

<img width="1157" alt="storage" src="https://user-images.githubusercontent.com/107421370/203167079-e436af19-38ae-4963-828f-7e700b2d60b4.png">

<img width="1152" alt="cache" src="https://user-images.githubusercontent.com/107421370/203167126-20f0dbc0-7134-49ad-8d0e-ca5c85043882.png">

<img width="1152" alt="manifest-json" src="https://user-images.githubusercontent.com/107421370/203167139-e0d1eeb2-732d-482d-8a3a-9036eb7a2875.png">

This functionality persists in the installable application:

<img width="1156" alt="install" src="https://user-images.githubusercontent.com/107421370/203167191-21ab1e15-3f3c-41c7-a330-cb1b79367b38.png">

<img width="775" alt="app" src="https://user-images.githubusercontent.com/107421370/203167219-b1f17a2c-7c07-4fe0-b8e6-ea096900453d.png">


## Contributing
You can contribute to this project by submitting bugs via [ISSUES](https://github.com/StephCambria/PWA-Text-Editor/issues).

## Tests
All testing was done locally through Chrome Dev Tools.


## License
This application is licensed under the ISC license.

## Questions
You can find me [HERE](https://github.com/StephCambria) on Github.
You can email me at steph.cambria.art@gmail.com if you have any additional questions.
