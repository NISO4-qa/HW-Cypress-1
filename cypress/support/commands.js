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

Cypress.Commands.add('login', (email, password) => {
    cy.contains("Log in").click();
    if (email) {
        cy.get("#mail").type("bropet@mail.ru");
    };
    if (password) {
        cy.get("#pass").type("123");
    }
    cy.contains("Submit").click();
});
Cypress.Commands.add('add_book', (name, discribe) => { 
    cy.get('.p-0 > .btn').click()
    cy.get('#title').type(name)
    cy.get('#description').type(discribe)
    cy.contains('Submit').click()

})

Cypress.Commands.add('add_favorite', () => { 
    cy.contains("Books list").click();
    cy.contains("Add to favorite").click();
    cy.get("h4").click();
})
