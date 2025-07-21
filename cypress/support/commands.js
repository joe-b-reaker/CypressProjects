// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will.toLocaleDateString("en-US") overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { getParaBankTestData } from './utils/paraBankFaker';
const dayjs = require('dayjs');
Cypress.Commands.add('snapshot', (testCaseTitle) =>{
   // const now = Date(); 

    const now = dayjs().format('DD-MM-YYYYhhmmss')
    cy.screenshot(testCaseTitle +' ' +now);

})

Cypress.Commands.add('regUser',()=>{    
        cy.visit("https://parabank.parasoft.com/parabank/register.htm");
        const user = getParaBankTestData();
        cy.get('input[id="customer.firstName"]').type(user.firstName);
        cy.get('input[id="customer.lastName"]').type(user.lastName);
        cy.get('input[id="customer.address.street"]').type(user.address);
        cy.get('input[id="customer.address.state"]').type(user.state);
        cy.get('input[id="customer.address.city"]').type(user.city);
        cy.get('input[id="customer.address.zipCode"]').type(user.zipcode);
        cy.get('input[id="customer.phoneNumber"]').type(user.phone);
        cy.get('input[id="customer.ssn"]').type(user.SSN);
        cy.get('input[id="customer.username"]').type(user.username);
        cy.get('input[id="customer.password"]').type(user.password);
        cy.get('input[id="repeatedPassword"]').type(user.password);
        cy.get('input[value="Register"]').click();
         return cy.wrap(user);
})

