let testCaseTitle
describe("Assert Registration data using fixture",{testIsolation : false},()=> { 
    beforeEach(function () {
    testCaseTitle = this.currentTest.title;
  });
    it("Assert Registration Data",() =>{
        cy.visit("https://parabank.parasoft.com/parabank/register.htm");
        cy.snapshot(testCaseTitle);

            });

})