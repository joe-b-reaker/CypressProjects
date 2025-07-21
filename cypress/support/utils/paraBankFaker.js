import { faker, Faker } from "@faker-js/faker";

export function getParaBankTestData(){
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const address = faker.location.streetAddress();
    const state = faker.location.state();
    const city = faker.location.city();
    const zipcode = faker.location.zipCode();
    const phone = faker.phone.number();
    const SSN = faker.string.numeric(9);
    const username = firstName.toLowerCase();
    const account = faker.helpers.arrayElement(["CHECKING","SAVINGS"]);
 

return {
    firstName,
    lastName,
    address,
    state,
    city,
    zipcode,
    phone,
    SSN,
    username,
    password: 'password',
    account
}};