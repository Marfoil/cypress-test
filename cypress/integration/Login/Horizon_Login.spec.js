require('cypress-xpath');
import users from '../../fixtures/users.json';
import Login from './LoginPageObject';

describe('Horizon Login', { scrollBehavior: false }, () => {
	beforeEach(() => {
		const login = new Login();
		login.visit();
	});

	it('Horizon can be opened', () => {
		const login = new Login();
		login.getLogInBtn();
	});

	it('Horizon wrong user login', () => {
		const login = new Login();

		login.fillUsername(users[1].username);
		login.fillPassword(users[1].password);
		login.clickLogIn();
		cy.wait(4000);
		login.getErrorMessage().should('be.visible');
	});

	it('Horizon empty information user login', () => {
		const login = new Login();

		login.clickLogIn();
		login.getErrorMessage().should('be.visible');
	});

	it('Horizon user login', () => {
		const login = new Login();

		login.fillUsername(users[0].username);
		login.fillPassword(users[0].password);
		login.clickLogIn();
		login.getTreeMenu().should('be.visible');
	});

	it('Horizon user can log out', () => {
		const login = new Login();

		login.fillUsername(users[0].username);
		login.fillPassword(users[0].password);
		login.clickLogIn();
		login.getTreeMenu().should('be.visible');
		cy.wait(3000);
		login.openUserOptions();
		login.logOut();
		login.getLogInBtn();
	});
});
