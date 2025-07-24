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
import ParabankModules from './pages/ParabankModules';
const module = new ParabankModules;
const dayjs = require('dayjs');
Cypress.Commands.add('snapshot', (testCaseTitle) =>{
   // const now = Date(); 

    const now = dayjs().format('DD-MM-YYYYhhmmss')
    cy.screenshot("/"+testCaseTitle+"/"+testCaseTitle +' ' +now);

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

Cypress.Commands.add('openAccount',(user)=>{
        cy.contains('Open New Account').click();
        cy.get(module.accountTypeDropdown).select(user.account);
        cy.get(module.accountIdDropdown).select(0);
        cy.get(module.openNewAccountButton).click();
        cy.get('div[id="openAccountResult').should('be.visible');
        cy.contains('Account Opened!').should('be.visible');
        cy.contains('Congratulations, your account is now open.').should('be.visible');
        return cy.wrap(user);
})

Cypress.Commands.add('updateUserProfile',(user)=>{
        cy.contains('Update Contact Info').click();
        cy.wait(2000);
        module.clearEntryFields();
        cy.get(module.firstNameText).clear().type(user.firstName+"aaaaaaa");
        cy.get(module.lastNameText).clear().type(user.lastName);
        cy.get(module.streetText).clear().type(user.address);
        cy.get(module.stateText).clear().type(user.state);
        cy.get(module.cityText).clear().type(user.city);
        cy.get(module.zipCodeText).clear().type(user.zipcode);
        cy.get(module.phoneNumberText).clear().type(user.phone);
        cy.get(module.updateProfileButton).click();
        cy.contains('Profile Updated').should('be.visible');
        cy.contains('Your updated address and phone number have been added to the system.').should('be.visible'); 

})

Cypress.Commands.add('updateUserProfileclear',() =>{
        cy.contains('Update Contact Info').click();
        cy.wait(2000);
        module.clearEntryFields();
        cy.get(module.updateProfileButton).click();
        cy.contains('is required').should('be.visible'); 
})

Cypress.Commands.add('logOut',() =>{
        cy.contains('Log Out').click();
        cy.url().should('contains','https://parabank.parasoft.com/parabank/index.htm');
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking');
}


)
