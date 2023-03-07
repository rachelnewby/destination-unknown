import BudgetRatings from "./budgetRatings";
import mockRoadGoatData from './mockRoadGoatData';

describe("BudgetRatings", () => {
  it("returns the city name", () => {
    cy.mount(<BudgetRatings cityData={mockRoadGoatData}/>)
    cy.get('.ratings-div').should('exist')
    cy.get('img').should('be.visible')
    cy.wait(1000) 
  })
})