import PriceChart from './priceChart'

describe("PriceChart", () => {
  it("has a title", () => {
    cy.mount(<PriceChart/>)
    cy.get("#chart-title").should('exist')
    cy.get("#chart-title").should("have.text", "Here's your flight info")
  })
})