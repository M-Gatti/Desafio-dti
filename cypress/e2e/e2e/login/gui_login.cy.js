/// <reference types="Cypress"/>
import AuthenticationPage from '../../../support/AuthenticationPage';

const authenticationPage = new AuthenticationPage

describe('Teste login', () => {
    it.only('Deve ralizar o login com sucesso', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       authenticationPage.fillLogin("atum1@teste.com","teste1")
       cy.get('#SubmitLogin > span').click()
       cy.get('.account > span').should('contain','Marcus Junior')
    });
    it('Criando uma conta', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       const randomEmail = Math.random().toString(20).substring(2,15)+"@gmail.com"
       cy.get('#email_create').type(randomEmail)
       cy.get('#SubmitCreate > span').click()
       cy.get('#id_gender1').check()
       cy.get('#customer_firstname').type("Marcus")
       cy.get('#customer_lastname').type("Junior") 
       cy.get('#passwd').type("teste1")
       cy.get('#days').select('14').should('have.value','14')
       cy.get('#months').select('10').should('have.value','10')
       cy.get('#years').select('2002').should('have.value','2002')
       cy.get('#submitAccount > span').click()
       cy.get('.alert').should('contain','Your account has been created.')
      
    });
    it('Criando uma conta com email ja existente', () => {
       cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
       cy.get('#email_create').type("atum1@teste.com")
       cy.get('#SubmitCreate > span').click()
       cy.get('ol > li').should('contain','An account using this email address has already been registered. Please enter a valid password or request a new one.')
    });
});