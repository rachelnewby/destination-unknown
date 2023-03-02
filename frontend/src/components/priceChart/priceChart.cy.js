import PriceChart from './priceChart'
import mockData from './mockFlightClientData'


describe("PriceChart", () => {
  it("has a title", () => {
    cy.mount(<PriceChart chartData={mockData}/>)
    cy.get("#chart-title").should('exist')
    cy.get("#chart-title").should("have.text", "Here's your flight info")
  })

  it("renders bar chart", () => {
    cy.mount(<PriceChart chartData={mockData}/>)
    cy.get('#bar-chart').should('be.visible')
  })
})

