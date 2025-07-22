describe("Assert Registration data using fixture",{testIsolation : false},()=> {
    it("Assert Registration Data",()=> {
        cy.visit("https://parabank.parasoft.com/parabank/register.htm");
            });
        //UI Check
        it("UI Check", () => {
            cy.get('input[id="customer.firstName"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.lastName"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.address.street"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.address.state"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.address.city"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.address.zipCode"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.phoneNumber"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.ssn"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.username"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="customer.password"]').should('be.visible').and('not.be.disabled');
            cy.get('input[id="repeatedPassword"]').should('be.visible').and('not.be.disabled');
        }); 

        //Input fields
        it("Input Fields", () => {
        cy.fixture("ParabankUser.json").then((user) => {
            cy.get('input[id="customer.firstName"]').type(user.FirstName);
            cy.get('input[id="customer.lastName"]').type(user.LastName);
            cy.get('input[id="customer.address.street"]').type(user.Address);
            cy.get('input[id="customer.address.state"]').type(user.State);
            cy.get('input[id="customer.address.city"]').type(user.City);
            cy.get('input[id="customer.address.zipCode"]').type(user.Zipcode);
            cy.get('input[id="customer.phoneNumber"]').type(user.Phone);
            cy.get('input[id="customer.ssn"]').type(user.SSN);
            cy.get('input[id="customer.username"]').type(user.UserName);
            cy.get('input[id="customer.password"]').type(user.Password);
            cy.get('input[id="repeatedPassword"]').type(user.ConfirmPassword);
        });    
        });

        //Click Register
        it("Click Register and View Confirmation", () => {
            cy.get('[colspan="2"] > .button').should('be.visible').and('not.be.disabled');
        //Input fields
            cy.get('[colspan="2"] > .button').click();
        //View Confirmation 
        cy.url().should('contain','parabank/register.htm');
        cy.get('.title').should('be.visible').and('contain','Welcome')
        cy.get('#rightPanel > p').should('be.visible').and('contain','Your account was created successfully. You are now logged in')
        });
});