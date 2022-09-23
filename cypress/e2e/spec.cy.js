describe('Pizza App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  })

  // const orderBtn = () => cy.get(a['href=']);
  const textInput = () => cy.get('input[name=name]');
  const selectSize = () => cy.get('select');
  const sauceInput = () => cy.get('[type="radio"]').first();
  const submitBtn = () => cy.get('button[id=order-button]');

  it('adds text to name input', () => {
    textInput().should('exist');
    textInput().type('R2D2');
    textInput().should('have.value', 'R2D2');
  })

  it('selects all radios and checkboxes', () => {
    cy.get("[type='radio']").check();
    cy.get("[type='checkbox']").check();
    // orderBtn().should('exist');
    sauceInput().should('exist').check();
  })

  it('submits form', () => {
    textInput().type('R2D2');
    selectSize().select('6"');
    sauceInput().check();
    cy.get("[type='checkbox']").check();
    submitBtn().click();
  })

  // DISABLE BUTTON IF VALIDATION IS NOT MET











})
