describe("POC", ()=> {
    it("",()=>{
        cy.visit('https://www.automationexercise.com/products');
        const ListA = " > div > ul > li:nth-child(";
        const ListB = ") > a";
        const categories = ['#Women', '#Men', '#Kids'];
 //cy.get('#accordian > div:nth-child(1) > div.panel-heading > h4 > a').click();
 //#accordian > div:nth-child(2) > div.panel-heading > h4 > a

categories.forEach((category,i) => {
    const accordianList = '#accordian > div:nth-child(' ;
    const accordianEnd = ') > div.panel-heading > h4 > a';
    var childn = i+1;
    cy.get(accordianList+childn+accordianEnd).click();
  cy.get(`${category} > div > ul > li`).then($items => {
    const itemCount = $items.length;

    for (let j = 1; j <= itemCount; j++) {
      cy.get(category + ListA + j + ListB)
        .should('be.visible')
        .click();

      // Re-click to reopen accordion after each click (if needed)
      cy.get(accordianList + childn + accordianEnd).click();
    };
}
    );

} )})})