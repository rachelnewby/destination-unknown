import FlightLinkButton from './flightLinkButton';
import mockData from '../priceChart/mockFlightClientData';


describe("FlightLinkButton", () => {
  it("has button element", () => {
    cy.mount(<FlightLinkButton chartData={mockData}/>)
    cy.get('button').should('exist')
  })

  it("has correct number of button elements", () => {
    cy.mount(<FlightLinkButton chartData={mockData}/>)
    cy.get('button').should('have.length', 3)
  })

  it("has a title", () => {
    cy.mount(<FlightLinkButton chartData={mockData}/>)
    cy.get('.title').should('have.text', "Book now!")
  })
})
