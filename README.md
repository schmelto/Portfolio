# :man_technologist: Portfolio Website,

This is my custom portfolio website made using _HTML_, _CSS_ and _JavaScript_.

The website is deployed to **GitHub Pages** and can be found [here](https://schmelto.github.io/Portfolio/).

![portfolio](https://user-images.githubusercontent.com/62628408/146424076-d0ca4032-bb2f-44ce-8920-5619f4dee695.gif)

## Prerequisites.

- [Git](https://git-scm.com/)
- [NodeJs](https://nodejs.org/)

## How to start?

### Install and develop on local machine.

To run the project locally on your computer please clone the project using this command `git clone` and then run `npm install` to install all required dependencies.

> This Project uses **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)**.

Due the project only uses _HTML_, _CSS_ and _JavaScript_ you can access the website on you local machine by opening the `index.html`-file with your favorite browser or by running `npm start`.

### Automated tests and formatter.

Before you submit a pull request you can run the tests with `npm test`. This will run all tests and will show you all the errors. The tests were written in [cucumber](https://cucumber.io/) and [cypress](https://www.cypress.io/).

Further you should run the formatter with `npm run format`.

### Add another project to the website.

The projects shown on the website are being accessed through the [GitHub API](https://docs.github.com/en/rest) and can be maintained by modifing the [scripts.js](./js/scripts.js).

```js
let githubprojects = [
  {
    name: 'schmelto/100-days-of-code',
    icon: 'description',
  },
];
```

- **name**: username/repository (GitHub)
- **icon**: icon you want to display for the project (using [Google Font Icons](https://fonts.google.com/icons))

> Due to lots of projects using icons in their project description the script in [js/scripts.js](./js/scripts.js) remove the github icons.
>
> ```js
> project.description.replace(/:[^}]*:/, '');
> ```

## Chatbot.

The chatbot integrated into the website is using [SAP Conversational AI](https://cai.tools.sap/).
You can build your own chatbot using the [SAP Conversational AI](https://cai.tools.sap/) platform and integrate it into the website by changing the script in the [index.html](./index.html) file.

## Contribute

If you want to contribute to this project and make it better, your help is very welcome.

### Want to Help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Check out one of our [issues](https://github.com/schmelto/Portfolio/issues).

### Code of Conduct.

Help us keep this project open and inclusive. Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

### Love this project? Consider giving it a ⭐

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/schmelto/Portfolio)
