// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import 'cypress-localstorage-commands';

// Cypress.Commands.add('logInAs', (environment, user, password) => {
// 	cy.request({
// 		method: 'POST',
// 		url: `https://${environment}.horizon.greenpowermonitor.com/api/auth/token`,
// 		body: `username=${user}&password=${password}&grant_type=password`,
// 	})
// 		.its('body')
// 		.then((body) => {
// 			console.log(body);
// 			cy.setLocalStorage('accessToken', body.data.access_token);
// 			cy.setLocalStorage('refreshToken', body.data.refreshToken);
// 		});
// });
