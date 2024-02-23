beforeEach(() => {
  cy.visit('https://accounts.descomplica.com.br/cadastrar/?returnUrl=https://aulas.descomplica.com.br/');
});

describe('Este é um describe', () => {
  it('Primeiro It. Após a visita da página de cadastro', () => {
    cy.get('.cc-compliance > .cc-btn > .dp-bar-button').click()
    cy.get('#signup-email').type('Deby@gmail.com');
    cy.get('#signup-email-confirmation').type('Deby@gmail.com');
    cy.get('#signup-phone').type('11999999999');
    cy.get('#signup-password');
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').type(123456);
    cy.get('.accounts227').click();
    cy.get('#signup-button').click();
  });
});

