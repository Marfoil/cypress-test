class Login {
	constructor() {}

	visit() {
		cy.visit('https://dev5lts.horizon.greenpowermonitor.com');
	}
	clickLogIn() {
		cy.contains('Log In').click();
	}
	getLogInBtn() {
		return cy.contains('Log In');
	}
	getErrorMessage() {
		return cy.xpath('//p[contains(@class, "error")]');
	}
	fillUsername(user) {
		cy.get('#login-form-username').type(user);
	}
	fillPassword(password) {
		cy.get('#login-form-password').type(password);
	}
	openUserOptions() {
		cy.get('.thumb-user').click();
	}
	logOut() {
		cy.contains('Logout user').click();
	}
	getTreeMenu() {
		return cy.get('.tree-menu');
	}
}

export default Login;
