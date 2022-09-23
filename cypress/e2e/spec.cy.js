describe('Pizza App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  const orderBtn = () => cy.get('a[id=order-pizza]');
  const textInput = () => cy.get('input[name=name]');
  const selectSize = () => cy.get('select');
  const sauceInput = () => cy.get('[type="radio"]').first();
  const submitBtn = () => cy.get('button[id=order-button]');

  it('adds text to name input', () => {
    orderBtn().click();
    textInput().should('exist');
    textInput().type('R2D2');
    textInput().should('have.value', 'R2D2');
  })

  it('selects all radios and checkboxes', () => {
    orderBtn().click();
    cy.get("[type='radio']").check();
    cy.get("[type='checkbox']").check();
    sauceInput().should('exist').check();
  })

  it('submits form', () => {
    orderBtn().click();
    submitBtn().should('be.disabled');
    textInput().type('R2D2');
    selectSize().select('6"');
    sauceInput().check();
    cy.get("[type='checkbox']").check();
    submitBtn().should('not.be.disabled');
    submitBtn().click();
  })

})
