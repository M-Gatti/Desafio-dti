/// <reference types="Cypress"/>
export default class AuthenticationPage {

    elements = {
        textEmail: () =>  cy.get('#email'),
        textPasswd: () =>  cy.get('#passwd')

    };
  
    fillLogin(email,senha) {
        this.elements.textEmail().type("atum1@teste.com") 
        this.elements.textPasswd().type("teste1")
    }
}