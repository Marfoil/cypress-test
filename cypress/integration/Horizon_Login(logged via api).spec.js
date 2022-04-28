require('cypress-xpath');
import users from '../fixtures/users.json';
import 'cypress-localstorage-commands';

describe('Horizon Login second file', { scrollBehavior: false }, () => {
	beforeEach(() => {
		cy.visit('https://dev5lts.horizon.greenpowermonitor.com');
	});

	it('Horizon can be opened', () => {
		cy.contains('Log In');
	});

	it('Horizon wrong user login', () => {
		cy.get('#login-form-username').type(users[1].username);
		cy.get('#login-form-password').type(users[1].password);
		cy.contains('Log In').click();
		cy.wait(4000);
		cy.xpath('//p[contains(@class, "error")]').should('be.visible');
	});

	it('Horizon empty information user login', () => {
		cy.contains('Log In').click();
		cy.xpath('//p[contains(@class, "error")]').should('be.visible');
	});

	it('Horizon user login', () => {
		cy.get('#login-form-username').type(users[0].username);
		cy.get('#login-form-password').type(users[0].password);
		cy.contains('Log In').click();
		cy.get('.tree-menu').should('be.visible');
	});

	describe('When user is logged in', () => {
		beforeEach(() => {
			// cy.visit(environmentURL);
			cy.request(
				'POST',
				'https://dev5lts.horizon.greenpowermonitor.com/api/auth/token',
				'username=jmarfil&password=Llunas21&grant_type=password'
			)
				.its('body')
				.then((response) => {
					console.log(body);
					cy.setLocalStorage('accessToken', body.data.access_token);
					cy.setLocalStorage('refreshToken', body.data.refreshToken);
				});
		});

		it('Horizon user can log out', () => {
			cy.get('.tree-menu').should('be.visible');
			cy.wait(3000);
			cy.get('.thumb-user').click();
			cy.contains('Logout user').click();
			cy.contains('Log In');
		});
	});

	// it.only('Horizon user can log out', () => {
	// 	cy.visit(environmentURL);
	// 	cy.get('#login-form-username').type(users[0].username);
	// 	cy.get('#login-form-password').type(users[0].password);
	// 	cy.contains('Log In').click();
	// 	cy.get('.tree-menu').should('be.visible');
	// 	cy.wait(3000);
	// 	cy.get('.thumb-user').click();
	// 	cy.contains('Logout user').click();
	// 	cy.contains('Log In');
	// });
});
