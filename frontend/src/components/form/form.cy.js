import FlightForm from './form'

describe('FlightForm', () => {
  it('user can enter dept, arr dates, arr/dept locations and traveller number', () => {
    cy.mount(<FlightForm />)
    cy.get('.form__row:nth-child(1) .form-control').click();
    cy.get('.form__row:nth-child(1) .form-control').type('LAX');
    cy.get('.form__row:nth-child(3) .form-control').click();
    cy.get('.form__row:nth-child(3) .form-control').type('FCO');
    cy.get('.form__row:nth-child(5) .form-control').click();
    cy.get('.form__row:nth-child(5) .form-control').type('2023-07-01');
    cy.get('.form__row:nth-child(7) .form-control').click();
    cy.get('.form__row:nth-child(7) .form-control').type('2023-07-08');
    cy.get('.form__row:nth-child(9) .form-control').click();
    cy.get('.form__row:nth-child(9) .form-control').type('1');
    cy.get('button').click();
    cy.get('form').submit();
  })
})



