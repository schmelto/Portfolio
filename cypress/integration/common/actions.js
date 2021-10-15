/* eslint-disable no-undef */
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the website', () => {
  cy.visit('index.html');
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title);
});

Then(`I see {string} in {string}`, (text, location) => {
  cy.get(location).should('contain', text);
});
