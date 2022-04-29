require('cypress-xpath');
import users from '../fixtures/users.json';
import { x } from './test';
import 'cypress-localstorage-commands';

describe('Horizon Login second file', { scrollBehavior: false }, () => {
	beforeEach(() => {
		cy.visit('https://dev5lts.horizon.greenpowermonitor.com');
	});

	users.map((user) => {
		it(`Horizon user wrong login (${user.username})`, () => {
			x(user);
		});
	});

	it('Horizon user can log out', () => {
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
