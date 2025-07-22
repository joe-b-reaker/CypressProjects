describe('Create Test Script to assert the labels, fields and buttons in homepage', () => {

    it("Verify Orange Website is successfully launched", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('.orangehrm-login-branding > img').should('be.visible');
        cy.get('.oxd-text--h5').should('be.visible').and('contain', "Login");
        cy.get('.oxd-sheet').should('be.visible');
        cy.get('.oxd-sheet > :nth-child(1)').should('be.visible').and('contain', "Username : Admin");
        cy.get('.oxd-sheet > :nth-child(2)').should('be.visible').and('contain', "Password : admin123");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible').and('contain', 'Username');
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper').should('be.visible').and('contain', 'Password');
        cy.get('.oxd-button').should('be.enabled');
        cy.get('.orangehrm-login-forgot > .oxd-text').should('be.visible');

    });
});
describe("Create Test Scripts to Assert a Successful and Unsuccessful Login", () => {
    it("Successful Login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();  
        cy.wait(5000);
    });

    it("Unsuccessful Login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234');
        cy.get('.oxd-button').click();
        cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain',"Invalid credentials");
    });
});