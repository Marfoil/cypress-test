require('cypress-xpath');
import users from '../fixtures/users.json';

describe('Horizon Login third file', { scrollBehavior: false }, () => {
	const environmentURL = 'https://dev5lts.horizon.greenpowermonitor.com';

	it('Horizon can be opened', () => {
		cy.visit(environmentURL);
		cy.contains('Log In');
	});

	it('Horizon wrong user login', () => {
		cy.visit(environmentURL);
		cy.get('#login-form-username').type(users[1].username);
		cy.get('#login-form-password').type(users[1].password);
		cy.contains('Log In').click();
		cy.wait(4000);
		cy.xpath('//p[contains(@class, "error")]').should('be.visible');
	});

	it('Horizon empty information user login', () => {
		cy.visit(environmentURL);
		cy.contains('Log In').click();
		cy.xpath('//p[contains(@class, "error")]').should('be.visible');
	});

	it('Horizon user login', () => {
		cy.visit(environmentURL);
		cy.get('#login-form-username').type(users[0].username);
		cy.get('#login-form-password').type(users[0].password);
		cy.contains('Log In').click();
		cy.get('.tree-menu').should('be.visible');
	});

	it('Horizon user can log out', () => {
		cy.visit(environmentURL);
		cy.get('#login-form-username').type(users[0].username);
		cy.get('#login-form-password').type(users[0].password);
		cy.contains('Log In').click();
		cy.get('.tree-menu').should('be.visible');
		cy.wait(3000);
		cy.get('.thumb-user').click();
		cy.contains('Logout user').click();
		cy.contains('Log In');
	});
});
