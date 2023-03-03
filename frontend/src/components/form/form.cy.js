import FlightForm from './form'

describe('FlightForm', () => {
  it('user can enter dept, arr dates, arr/dept locations and traveller number', () => {
    cy.mount(<FlightForm />)
    cy.get('.form__row:nth-child(1) .form-control').select('LHR');
    cy.get('.form__row:nth-child(3) .form-control').select('BCN');
    cy.get('.form__row:nth-child(5) .form-control').type('2023-03-04');
    cy.get('.form__row:nth-child(7) .form-control').type('{backspace}');
    cy.get('.form__row:nth-child(7) .form-control').type('{backspace}');
    cy.get('.form__row:nth-child(7) .form-control').type('{backspace}');
    cy.get('.form__row:nth-child(7) .form-control').type('{backspace}');
    cy.get('.form__row:nth-child(7) .form-control').type('2023-03-10');
    cy.get('.form__row:nth-child(9) .form-control').type('2');
    cy.get('button').click();
  })
})



