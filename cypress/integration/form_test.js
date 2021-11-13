describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const form = () => cy.get("form[id=pizza-form]");
  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select[name=size]");
  const cheeseInput = () => cy.get("input[name=cheese]");
  const pepperoniInput = () => cy.get("input[name=pepperoni]");
  const jalapenosInput = () => cy.get("input[name=jalapenos]");
  const pineappleInput = () => cy.get("input[name=pineapple]");
  const textArea = () => cy.get("textArea[name=special]");
  const submitButton = () => cy.get("button[id=order-button]");

  it("Can type in name input", () => {
    nameInput()
      .should("have.value", "")
      .type("Tommy")
      .should("have.value", "Tommy");
  });

  it("Can check cheese input", () => {
    cheeseInput().check().should("be.checked");
  });
  it("Can check pepperoni input", () => {
    pepperoniInput().check().should("be.checked");
  });
  it("Can check jalapenos input", () => {
    jalapenosInput().check().should("be.checked");
  });
  it("Can check pineapple input", () => {
    pineappleInput().check().should("be.checked");
  });

  it("Can fill and submit form", () => {
    nameInput()
      .should("have.value", "")
      .type("Tommy")
      .should("have.value", "Tommy");
    sizeInput().select("Large").should("have.value", "large");
    cheeseInput().check().should("be.checked");
    jalapenosInput().check().should("be.checked");
    textArea()
      .should("have.value", "")
      .type("Gate Code is 9999")
      .should("have.value", "Gate Code is 9999");
    form().submit();
  });
});
