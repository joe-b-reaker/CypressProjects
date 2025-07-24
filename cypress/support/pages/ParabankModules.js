class ParabankModules{
        //Login
        loginText= '#loginPanel > form > div:nth-child(2) > input';
        loginPasswordText = '#loginPanel > form > div:nth-child(4) > input';
        loginButton = '#loginPanel > form > div:nth-child(5) > input';
        //Registration Page Modules

        //entry fields
        firstNameText = 'input[id="customer.firstName"]';
        lastNameText = 'input[id="customer.lastName"]';
        streetText = 'input[id="customer.address.street"]';
        cityText = 'input[id="customer.address.city"]';
        stateText = 'input[id="customer.address.state"]';

        zipCodeText  = 'input[id="customer.address.zipCode"]';
        phoneNumberText  = 'input[id="customer.phoneNumber"]';
        SSNText  = 'input[id="customer.ssn"]';
        usernameText  = 'input[id="customer.username"]';
        passwordText  = 'input[id="customer.password"]';
        repeatedPasswordText = 'input[id="repeatedPassword"]';
        
        //drop-down menus

        //labels

        //buttons
        registerButton  = 'input[value="Register"]';
        //Open New Account Modules 

        //entryfields 


        //drop-down menus
        accountTypeDropdown  = 'select[id="type"]';
        accountIdDropdown  = 'select[id="fromAccountId"]';

        //labels

        //buttons
        openNewAccountButton  = 'input[value="Open New Account"]';

        //Update User Profile Modules

        //entry fields

        //drop-down menus

        //labels

        //buttons
        updateProfileButton = 'input[value="Update Profile"]';
        
        //Accounts Overview

        //entry fields

        //drop-down menus

        //labels
        balanceLabel = '#accountTable > tbody > tr:nth-child(1) > td:nth-child(2)';
        availableAmount = '#accountTable > tbody > tr:nth-child(1) > td:nth-child(3)';
        totalBalance = '#accountTable > tbody > tr:nth-child(2) > td:nth-child(2) > b';

        //links
        accountLink = ' #accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a';
        
        //Transfer Funds 

        //entry fields
        amountText  = 'input[id="amount"]';

        //drop-down menus
        accountfromIdDropdown  = 'select[id="fromAccountId"]';
        accounttoIdDropdown  = 'select[id="toAccountId"]';

        //labels
        messageLabel = '#showResult > h1';
        amountLabel = '#amountResult';
        accountfromLabel = '#fromAccountIdResult'; 
        accounttoLabel = '#toAccountIdResult';

        //buttons 
        transferButton = 'input[value="Transfer"]';
        //links

        //Bills Payment

        //entry fields
        namePayeeText = 'input[name="payee.name"]';
        streetPayeeText = 'input[name="payee.address.street"]';
        cityPayeeText = 'input[name="payee.address.city"]';
        statePayeeText = 'input[name="payee.address.state"]';
        zipCodePayeeText  = 'input[name="payee.address.zipCode"]';
        phoneNumberPayeeText  = 'input[name="payee.phoneNumber"]';
         accountNoText = 'input[name="payee.accountNumber"]';  
         verifyaccountNoText = 'input[name="verifyAccount"]';
         billamountText = 'input[name="amount"]';
        //drop-down menus
         fromaccountDropdown  = 'select[name="fromAccountId"]';
        //labels
         billpayResultLabel = '#billpayResult > h1'; 
         payeeNameLabel  = '#payeeName';
         billamountLabel = '#amount';
         fromaccountLabel = '#fromAccountId';
        //buttons 
        sendPaymentButton = 'input[value="Send Payment"]'
        //links

        //Request Loan 

        //entry fields
        downPaymentText  = 'input[id="downPayment"]';
        //drop-down

        //buttons

        applyNowButton = 'input[value="Apply Now"]';

        //labels 

         //<td id="loanProviderName" width="75%">Wealth Securities Dynamic Loans (WSDL)</td>
         loanResultLabel = '#requestLoanResult > h1';
         loanProviderLabel='#loanProviderName';
         responseDateLabel='#responseDate';
         statusLabel ='#loanStatus';
         loanError='#loanRequestDenied > .error';
         //Congratulations, your loan has been approved.
        //links
        newAccountId = '#newAccountId';
        
        //Find Transactions 

        //text field
        transactionIdText = 'input[id="transactionId"]';
        transactionDateText = 'input[id="transactionDate"]';
        transactionfromDateText = 'input[id="fromDate"]';
        transactiontoDateText = 'input[id="toDate"]';
        //dropdown
        selectAccountId = '#accountId';
        //labels
        transactionIdErrorLabel = 'span[id="transactionIdError"]';
        
        //button
        findByIdButton = '#findById';
        findByDateButton ='#findByDate';
        findByDateRangeButton ='#findByDateRange';
        findByAmountRange = '#findByAmount';
        
        //link

        //Transaction Details 

        //labels 
        transactionIDLabel = '#rightPanel > table > tbody > tr:nth-child(1) > td:nth-child(2)';
        transactionDateLabel = '#rightPanel > table > tbody > tr:nth-child(2) > td:nth-child(2)';
        transactionDescriptionLabel = '#rightPanel > table > tbody > tr:nth-child(3) > td:nth-child(2)';
        transactionTypeLabel = '#rightPanel > table > tbody > tr:nth-child(4) > td:nth-child(2)';
        transactionAmountLabel = '#rightPanel > table > tbody > tr:nth-child(5) > td:nth-child(2)';
        //link
        transactionLink='#transactionTable > tbody > tr:nth-child(1) > td:nth-child(2) > a';
        transactionResultLink = '#transactionBody > tr:nth-child(1) > td:nth-child(2) > a';
        
        

 clearEntryFields(){
    cy.get(this.firstNameText).clear();
    cy.get(this.lastNameText).clear();
    cy.get(this.streetText).clear();
    cy.get(this.cityText).clear();
    cy.get(this.stateText).clear();
    cy.get(this.zipCodeText).clear();
    cy.get(this.phoneNumberText).clear();

 }; 
};

export default ParabankModules;