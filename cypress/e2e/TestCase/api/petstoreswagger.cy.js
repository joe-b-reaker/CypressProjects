describe('Swagger - Petstore API Test Cases', () => {
  it('Create user using POST request', () => {
    //user Create User
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user', 
      body : {
                id: 1,
                username: 'jayala',
                firstName: 'Jose',
                lastName: 'Ayala',
                email: 'jayala@verete-email.com',
                password: 'password',
                phone: '11111111111',
                userStatus: 1
            },
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
      }).then((response) => {
            expect(response.status).to.be.oneOf([200,404]);
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.be.a('string');
        });
    });

  it('Retrieve user data using GET request',() =>{
    cy.request({
                    method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/jayala',
            failOnStatusCode: false
        }).then((response) => {
            cy.log(response);
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.have.property('username', 'jayala');
            expect(response.body).to.have.property('id', 1);
     });
  });
  it('Update user data using PUT request',()=>{
    cy.request({
                    method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/jayala',
            body : {
                id: 1,
                username: 'jayala',
                firstName: 'JoseUpdated',
                lastName: 'Ayala',
                email: 'jayala@verete-email.com',
                password: 'password',
                phone: '11111111111',
                userStatus: 1
            },
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(response);
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.have.property('code', 200);
     });
  });

    it('Delete a user by using DELETE request',()=>{
    cy.request({
                    method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/jayala',
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(response);
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('application/json');
            expect(response.body).to.have.property('code', 200);
     });
  });

      it('Attempt to delete a non-existing user by using DELETE request',()=>{
    cy.request({
                    method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/notjayala',
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(response);
            expect(response.status).to.be.oneOf([200,404]);
     });
  });
     it('Create user with createWithList using POST request', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: [
                {
                    id: 2,
                    username: 'jose',
                    firstName: 'Jose',
                    lastName: 'Ayala',
                    email: 'jose@email.com',
                    password: 'password',
                    phone: '11111111112',
                    userStatus: 1
                },
                {
                    id: 3,
                    username: 'ricardo',
                    firstName: 'Ricardo',
                    lastName: 'Ayala',
                    email: 'ricardo@email.com',
                    password: 'password',
                    phone: '11111111113',
                    userStatus: 1
                }
            ],
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.be.a('string');
        });
    });

  it('Create user with createWithArray using  POST request', () => {
    //user Create User
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithArray', 
      body : [{
                id: 4,
                username: 'joseayala',
                firstName: 'Jose',
                lastName: 'Ayala',
                email: 'jayala@verete-email.com',
                password: 'password',
                phone: '11111111111',
                userStatus: 1
    }] ,  
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
      }).then((response) => {
            expect(response.status).to.be.oneOf([200,404]);
            expect(response.body).to.have.property('message');
            expect(response.body).to.have.property('message','ok');
        });
    });
  it('Create a duplicate user using POST request', () => {
    //user Create User
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user', 
      body : {
                id: 2,
                username: 'jayaladuplicate',
                firstName: 'Jose',
                lastName: 'Ayala',
                email: 'jayala@verete-email.com',
                password: 'password',
                phone: '11111111111',
                userStatus: 1
            },
      headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
      }).then((response) => {
            expect(response.status).to.be.oneOf([200,404]);
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.be.a('string');
        });
    });
});
