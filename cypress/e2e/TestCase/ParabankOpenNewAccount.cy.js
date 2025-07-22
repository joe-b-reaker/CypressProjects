import { getParaBankTestData } from '../../support/utils/paraBankFaker';
let testCaseTitle;
describe("Test the Functionality for Open New Account, Update User & Log Out",()=> {
        beforeEach(function () {
    testCaseTitle = this.currentTest.title;
  });
    it("User is Successful in Opening a New Account", () => {
        cy.regUser().then((user) => {
        cy.snapshot(testCaseTitle);
        cy.contains('Open New Account').click();
        cy.get('select[id="type"]').select(user.account);
        cy.get('select[id="fromAccountId"]').select(0);
        cy.get('input[value="Open New Account"]').click();
        cy.get('div[id="openAccountResult').should('be.visible');
        cy.contains('Account Opened!').should('be.visible');
        cy.contains('Congratulations, your account is now open.').should('be.visible');
          cy.snapshot(testCaseTitle);
        });
  
/*     it("User is not Successful in Opening a New Account", () => {
        cy.regUser().then((user) => {
        cy.contains('Open New Account').click();
        cy.get('select[id="type"]').select(user.account);
        cy.get('select[id="fromAccountId"]').select(1);
        cy.get('input[value="Open New Account"]').click();
        cy.get('div[id="openAccountResult').should('be.visible');
        cy.contains('Account Opened!').should('be.visible');
        cy.contains('Congratulations, your account is now open.').should('be.visible');
        });
   }); */
});


   it("Update User Profile with valid entries" , ()=> {
        cy.regUser().then((user) => {
        cy.snapshot(testCaseTitle);
        cy.contains('Update Contact Info').click();
        cy.get('input[id="customer.firstName"]').clear().type(user.firstName+"aaaaaaa");
        cy.get('input[id="customer.lastName"]').clear().type(user.lastName);
        cy.get('input[id="customer.address.street"]').clear().type(user.address);
        cy.get('input[id="customer.address.state"]').clear().type(user.state);
        cy.get('input[id="customer.address.city"]').clear().type(user.city);
        cy.get('input[id="customer.address.zipCode"]').clear().type(user.zipcode);
        cy.get('input[id="customer.phoneNumber"]').clear().type(user.phone);
        cy.get('input[value="Update Profile"]').click();
        cy.contains('Profile Updated').should('be.visible');
        cy.contains('Your updated address and phone number have been added to the system.').should('be.visible'); 
        cy.snapshot(testCaseTitle);
        });
   });

      it("Update User Profile with empty fields" , ()=> {
        cy.regUser();
        cy.snapshot(testCaseTitle);
        cy.contains('Update Contact Info').click();
        cy.get('input[id="customer.firstName"]').clear();
        cy.get('input[id="customer.lastName"]').clear();
        cy.get('input[id="customer.address.street"]').clear();
        cy.get('input[id="customer.address.state"]').clear();
        cy.get('input[id="customer.address.city"]').clear();
        cy.get('input[id="customer.address.zipCode"]').clear();
        cy.get('input[id="customer.phoneNumber"]').clear();
        cy.get('input[id="customer.firstName"]').clear();
        cy.get('input[value="Update Profile"]').click();
        //cy.contains('Profile Updated').should('be.visible');
        cy.contains('is required').should('be.visible'); 
        cy.snapshot(testCaseTitle);
   });


   it("Log Out User",() =>{
          cy.regUser();
          cy.snapshot(testCaseTitle);
        cy.contains('Log Out').click();
        cy.url().should('contains','https://parabank.parasoft.com/parabank/index.htm');
        cy.title().should('eq', 'ParaBank | Welcome | Online Banking');
          cy.snapshot(testCaseTitle);
   });

});
//https://parabank.parasoft.com/parabank/index.htm
//<title>ParaBank | Welcome | Online Banking</title>
 

/* <div id="openAccountResult" style="display:none">
    <h1 class="title">Account Opened!</h1>
    <p>Congratulations, your account is now open.</p>
    <p><b>Your new account number:</b> <a id="newAccountId" href=""></a></p>
  </div> */

    //https://parabank.parasoft.com/parabank/activity.htm?id=13788
    //cy.get('#accountId')
    //cy.get('#accountType')
    //cy.get('#balance')
    //cy.get('#balance')

    //href="requestloan.htm"

    //Update Profile
    //Profile Updated
    //Your updated address and phone number have been added to the system.
    //href="logout.htm"
