require('cypress-xpath');

export const x = (user) => {
	cy.get('#login-form-username').clear().type(user.username);
	cy.get('#login-form-password').clear().type(user.password);
	cy.contains('Log In').click();
	cy.wait(4000);
	cy.xpath('//p[contains(@class, "error")]').should('be.visible');
};
