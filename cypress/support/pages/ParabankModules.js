class ParabankModules{
   
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