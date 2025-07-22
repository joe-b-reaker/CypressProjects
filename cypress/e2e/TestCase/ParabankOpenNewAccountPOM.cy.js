import { getParaBankTestData } from '../../support/utils/paraBankFaker';
let testCaseTitle;
describe("Test the Functionality for Open New Account, Update User & Log Out",()=> {
        beforeEach(function () {
    testCaseTitle = this.currentTest.title;
  });
    it("User is Successful in Opening a New Account", () => {
        cy.regUser().then((user) => {
        cy.snapshot(testCaseTitle);
        cy.openAccount(user);
        cy.snapshot(testCaseTitle);
        });
});

   it("Update User Profile with valid entries" , ()=> {
        cy.regUser().then((user) => {
        cy.snapshot(testCaseTitle);
        cy.updateUserProfile(user);
        cy.snapshot(testCaseTitle);
        });
   });

      it("Update User Profile with empty fields" , ()=> {
        cy.regUser();
        cy.snapshot(testCaseTitle);
        cy.updateUserProfileclear();
        cy.snapshot(testCaseTitle);
   });


   it("Log Out User",() =>{
        cy.regUser();
        cy.snapshot(testCaseTitle);
        cy.logOut();
        cy.snapshot(testCaseTitle);
   });

});