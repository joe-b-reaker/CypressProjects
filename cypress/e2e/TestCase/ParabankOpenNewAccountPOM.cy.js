import { getParaBankTestData } from '../../support/utils/paraBankFaker';
import ParabankModules from '../../support/pages/ParabankModules';
let testCaseTitle;
const module = new ParabankModules;
let userAccount = "";
let passwordAccount = "";
let transactionDetails = {};
describe("Test the Functionality for Open New Account, Update User & Log Out", () => {
  beforeEach(function () {
    testCaseTitle = this.currentTest.title;
  });
  it("User is Successful in Opening a New Account", () => {
    cy.regUser().then((user) => {
      cy.snapshot(testCaseTitle);
      cy.openAccount(user);
      cy.snapshot(testCaseTitle);
      userAccount = user.username;
      passwordAccount = user.password;
      cy.log(userAccount, passwordAccount);
    });
  });
  it("User can view Account Overview", () => {
    //checkAccounts();
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(module.loginText).should('be.visible').type(userAccount);
    cy.get(module.loginPasswordText).should('be.visible').type(passwordAccount);
    cy.get(module.loginButton).should('be.visible').click();
    cy.contains('Accounts Overview').click();
    cy.get(module.accountLink).should('be.visible');
    /*        cy.get(module.balanceLabel).should('be.visible');
              cy.get(module.availableAmount).should('be.visible');
              cy.get(module.totalBalance).should('be.visible'); */
    cy.get('tbody > tr').each(($row, index) => {
      cy.wrap($row).find('td:nth-child(1)').should('be.visible');
      cy.wrap($row).find('td:nth-child(2)').should('be.visible');
      cy.wrap($row).find('td:nth-child(3)').should('be.visible');
      cy.snapshot(testCaseTitle);
    });
  });

  it("User is able to Transfer Funds", () => {
    cy.regUser().then((user) => {
      userAccount = user.username;
      passwordAccount = user.password;
      cy.openAccount(user);
      cy.contains('Transfer Funds').click();
      var amount = 100;
      var accountfromId = 0;
      var accounttoId = 1;
      let accountfromValue = "";
      let accounttoValue = "";
      cy.get(module.amountText).should('be.visible').type(amount);
      cy.get(module.accountfromIdDropdown).should('be.visible').select(accountfromId);
      cy.get(module.accountfromIdDropdown + ' option:selected')
        .then($option => {
          accountfromValue = $option.text();
          cy.log('Selected text:', accountfromValue);
        })
      cy.get(module.accounttoIdDropdown).should('be.visible').select(accounttoId);
      cy.get(module.accounttoIdDropdown + ' option:selected')
        .then($option => {
          accounttoValue = $option.text();
          cy.log('Selected text:', accounttoValue);
          cy.snapshot(testCaseTitle)
          cy.get(module.transferButton).should('be.visible').click();
          cy.snapshot(testCaseTitle)
          cy.get(module.messageLabel).should('be.visible').and('contain', "Transfer Complete!");
          cy.get(module.amountLabel).should('be.visible').and('contain', amount);
          cy.get(module.accountfromLabel).should('be.visible').and('contain', accountfromValue);
          cy.get(module.accounttoLabel).should('be.visible').and('contain', accounttoValue);
          cy.snapshot(testCaseTitle)
        })
    });
  });

  it("User is able to Find Transactions using Transaction ID", () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(module.loginText).should('be.visible').type(userAccount);
    cy.get(module.loginPasswordText).should('be.visible').type(passwordAccount);
    cy.get(module.loginButton).should('be.visible').click();
    cy.snapshot(testCaseTitle)
    cy.getTransactionDetails(transactionDetails);
    cy.then(() => {
      cy.contains('Find Transactions').click();
      cy.snapshot(testCaseTitle)
      cy.get(module.transactionIdText).should('be.visible').type(transactionDetails.transactionID);
      cy.get(module.findByIdButton).should('be.visible').click();
      cy.contains("An internal error has occurred and has been logged.");
      cy.snapshot(testCaseTitle)
    });
  });

  it("User is able to Find Transactions using Transaction Date", () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(module.loginText).should('be.visible').type(userAccount);
    cy.get(module.loginPasswordText).should('be.visible').type(passwordAccount);
    cy.get(module.loginButton).should('be.visible').click();
    cy.snapshot(testCaseTitle)
    cy.getTransactionDetails(transactionDetails);
    cy.then(() => {
      cy.contains('Find Transactions').click();
      cy.snapshot(testCaseTitle)
      cy.get(module.transactionDateText).should('be.visible').type(transactionDetails.transactionDate);
      cy.get(module.findByDateButton).should('be.visible').click();
      cy.verifyTransactionDetails(transactionDetails);
      cy.snapshot(testCaseTitle)
    });
  });
  it("User is able to Find Transactions using Transaction Date Range", () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(module.loginText).should('be.visible').type(userAccount);
    cy.get(module.loginPasswordText).should('be.visible').type(passwordAccount);
    cy.get(module.loginButton).should('be.visible').click();
    cy.snapshot(testCaseTitle)
    cy.getTransactionDetails(transactionDetails);
    cy.snapshot(testCaseTitle)
    cy.then(() => {
      cy.contains('Find Transactions').click();
      cy.get(module.transactionfromDateText).should('be.visible').type(transactionDetails.transactionDate);
      cy.get(module.transactiontoDateText).should('be.visible').type(transactionDetails.transactionDate);
      cy.get(module.findByDateRangeButton).should('be.visible').click();
      cy.verifyTransactionDetails(transactionDetails);
      cy.snapshot(testCaseTitle)
    });
  });
  it("User is able to Find Transactions using Transaction Amount", () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get(module.loginText).should('be.visible').type(userAccount);
    cy.get(module.loginPasswordText).should('be.visible').type(passwordAccount);
    cy.get(module.loginButton).should('be.visible').click();
    cy.snapshot(testCaseTitle)
    cy.getTransactionDetails(transactionDetails);
    cy.then(() => {
      cy.contains('Find Transactions').click().then(()=>{
        cy.snapshot(testCaseTitle)
      const cleaned = transactionDetails.transactionAmount.replace(/[^\d.]/g, '');
       const integerPart = cleaned.split('.')[0];
      const transactionAmount = parseInt(integerPart, 10);
      cy.get(module.amountText).should('be.visible').type(transactionAmount);
      cy.get(module.findByAmountRange).should('be.visible').click();
      cy.verifyTransactionDetails(transactionDetails);
      cy.snapshot(testCaseTitle);
      });

    });
  })
  it("Bills Payment", () => {
    cy.regUser().then((user) => {
      var name = user.firstName + " " + user.lastName;
      var amount = 100;
      cy.contains('Bill Pay').click();
      cy.get(module.namePayeeText).type(name);
      cy.get(module.streetPayeeText).type(user.address);
      cy.get(module.statePayeeText).type(user.state);
      cy.get(module.cityPayeeText).type(user.city);
      cy.get(module.zipCodePayeeText).type(user.zipcode);
      cy.get(module.phoneNumberPayeeText).type(user.phone);
      cy.get(module.fromaccountDropdown).should('be.visible').select(0);
      cy.get(module.fromaccountDropdown + ' option:selected')
        .then($option => {
          var accountfromValue = $option.text();
          cy.get(module.accountNoText).should('be.visible').type(accountfromValue);
          cy.get(module.verifyaccountNoText).should('be.visible').type(accountfromValue);
          cy.get(module.billamountText).should('be.visible').type(amount);
          cy.get(module.sendPaymentButton).should('be.visible').click();
          cy.get(module.billpayResultLabel).should('be.visible').and('contain', "Bill Payment Complete");
          cy.get(module.payeeNameLabel).should('be.visible').and('contain', name);
          cy.get(module.billamountLabel).should('be.visible').and('contain', amount);
          cy.get(module.fromaccountLabel).should('be.visible').and('contain', accountfromValue);
        })
    })
  });
  it("Bills Payment - no amount", () => {
    cy.regUser().then((user) => {
      var name = user.firstName + " " + user.lastName;
      var amount = 0;
      cy.contains('Bill Pay').click();
       cy.snapshot(testCaseTitle);
      cy.get(module.namePayeeText).type(name);
      cy.get(module.streetPayeeText).type(user.address);
      cy.get(module.statePayeeText).type(user.state);
      cy.get(module.cityPayeeText).type(user.city);
      cy.get(module.zipCodePayeeText).type(user.zipcode);
      cy.get(module.phoneNumberPayeeText).type(user.phone);
      cy.get(module.fromaccountDropdown).should('be.visible').select(0);
      cy.get(module.fromaccountDropdown + ' option:selected')
        .then($option => {
          var accountfromValue = $option.text();
          cy.get(module.accountNoText).should('be.visible').type(accountfromValue);
          cy.get(module.verifyaccountNoText).should('be.visible').type(accountfromValue);
          cy.get(module.billamountText).should('be.visible').type(amount);
           cy.snapshot(testCaseTitle);
          cy.get(module.sendPaymentButton).should('be.visible').click();
          cy.get(module.billpayResultLabel).should('be.visible').and('contain', "Bill Payment Complete");
          cy.get(module.payeeNameLabel).should('be.visible').and('contain', name);
          cy.get(module.billamountLabel).should('be.visible').and('contain', amount);
          cy.get(module.fromaccountLabel).should('be.visible').and('contain', accountfromValue);
           cy.snapshot(testCaseTitle);
        })
    })
  });
  it("Update User Profile with valid entries", () => {
    cy.regUser().then((user) => {
      cy.snapshot(testCaseTitle);
      cy.updateUserProfile(user);
      cy.snapshot(testCaseTitle);
    });
  });

  it("Update User Profile with empty fields", () => {
    cy.regUser();
    cy.snapshot(testCaseTitle);
    cy.updateUserProfileclear();
    cy.snapshot(testCaseTitle);
  });

  it("Request Loan", () => {
    cy.regUser().then((user) => {
      var amount = 100;
      var loan = 1000;
      var loanProvider = "Wealth Securities Dynamic Loans (WSDL)"
      const today = new Date();
      const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}-${today.getFullYear()}`;
      var status = "Approved";

      cy.contains('Request Loan').click();
      cy.get(module.amountText).should('be.visible').type(loan);
      cy.get(module.downPaymentText).should('be.visible').type(amount);
      cy.get(module.applyNowButton).should('be.visible').click().then
       cy.snapshot(testCaseTitle);
      cy.get(module.loanResultLabel).should('be.visible').and('contain', "Loan Request Processed");
      cy.get(module.loanProviderLabel).should('be.visible').and('contain', loanProvider);
      cy.get(module.responseDateLabel).should('be.visible').and('contain', formattedDate);
      cy.get(module.statusLabel).should('be.visible').and('contain', status);
       cy.snapshot(testCaseTitle);

    });

  });
  it("Request Loan - Insufficient funds", () => {
    cy.regUser().then((user) => {
      var amount = 1000;
      var loan = 1000;
      var loanProvider = "Wealth Securities Dynamic Loans (WSDL)"
      const today = new Date();
      const formattedDate = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}-${today.getFullYear()}`;
      var status = "Denied";

      cy.contains('Request Loan').click();
       cy.snapshot(testCaseTitle);
      cy.get(module.amountText).should('be.visible').type(loan);
      cy.get(module.downPaymentText).should('be.visible').type(amount);
      cy.get(module.applyNowButton).should('be.visible').click().then
       cy.snapshot(testCaseTitle);
      cy.get(module.loanResultLabel).should('be.visible').and('contain', "Loan Request Processed");
      cy.get(module.loanProviderLabel).should('be.visible').and('contain', loanProvider);
      cy.get(module.responseDateLabel).should('be.visible').and('contain', formattedDate);
      cy.get(module.statusLabel).should('be.visible').and('contain', status);
      cy.get('#loanRequestDenied > .error').should('be.visible').contains('You do not have sufficient funds for the given down payment.');
       cy.snapshot(testCaseTitle);

    });

  });
  it("Log Out User", () => {
    cy.regUser();
    cy.snapshot(testCaseTitle);
    cy.logOut();
    cy.snapshot(testCaseTitle);
  });

}); 