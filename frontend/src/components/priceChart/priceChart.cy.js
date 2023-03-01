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

  // it('displays carrierLabels on the page', () => {
  //   cy.visit('/path/to/PriceChart') // replace with actual path to component
  //   cy.get('#chart-title').should('contain', 'Here\'s your flight info')
  //   cy.get('#bar-chart').should('exist')
  //   cy.get('#bar-chart').should('have.attr', 'data-labels').then(labelsAttr => {
  //     const labels = JSON.parse(labelsAttr)
  //     expect(labels).to.include.members(['BA - Magic Carpet', 'Monarch - Concord', 'Malaysian Air - Wizz Air'])
  //   })
  // })
})

