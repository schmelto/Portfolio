/* eslint-disable no-undef */
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I open the website', () => {
  cy.visit('index.html') 
})
Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then(`I see {string} in {string} with a {string}`, (content, target, attribute) => {
  cy.get(target)
  .should("have.attr", attribute)
  .and("include", content);
});

Then(`I see {string} in {string}`, (text, location) => {
  cy.get(location)
  .should('contain', text)
})