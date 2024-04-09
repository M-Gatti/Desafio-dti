/// <reference types="Cypress"/>
import AuthenticationPage from '../../support/AuthenticationPage';

const authenticationPage = new AuthenticationPage

describe('Teste login', () => {
    it('Deve ralizar o login com sucesso', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       
       authenticationPage.fillLogin("atum1@teste.com","teste1")
       
       cy.get('.account > span').should('contain','Marcus Junior')
    });
    it.only('Criando uma conta', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       const randomEmail = Math.random().toString(20).substring(2,15)+"@gmail.com"
       
       authenticationPage.fillCreateAccount(randomEmail,"Marcus","Junior","teste1","14","10","2002")
    
       cy.get('.alert').should('contain','Your account has been created.')
      
    });
    it('Criando uma conta com email ja existente', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       
       authenticationPage.existentAccount("atum1@gmail.com")

       cy.get('ol > li').should('contain','An account using this email address has already been registered. Please enter a valid password or request a new one.')
    });
});