describe("Books library", () => {
  beforeEach(() => {
  cy.visit("/");
})

it("Should open the main page", () => {
  cy.contains("Books list");
});

it("Authorization personal account", () => {
  cy.login("bropet@mail.ru", "123");
  cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
});

it("Should not login with empty email", () => {
  cy.login(null, "123");
  cy.get("#mail").then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});

it("Should not login with empty password", () => {
  cy.login("bropet@mail.ru", null);
  cy.get("#pass").then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});

it('Should add book', () => {
  cy.login('bropet@mail.ru', '123')
  cy.add_book('Интересная книга', 'Очень интересное описание')
  cy.contains('.card-title','Интересная книга').should('be.visible', true)
})
it('Should add book to favorite', () => {
  cy.login('bropet@mail.ru', '123')
  cy.add_book('Интересная книга', 'Очень интересное описание')
  cy.get('.card-footer > .btn').eq(-1).click()
  cy.get('.card-footer > .btn').eq(-1).contains('Delete from favorite').should('be.visible', true)        
});

it('Should delete book from favorite', () => {
  cy.login('bropet@mail.ru', '123')
  cy.get("h4").click();
  cy.get('.card-footer > .btn').eq(-1).contains('Delete from favorite').click()     
});

it("Should get information about book", () => {
  cy.login("bropet@mail.ru", "123");
  cy.get("#root > div > div > div > a:nth-child(1) > div > div.card-body").click();
  cy.contains("Dowload book").should("be.visible", true);
});

})