import Ratings from "./budgetRatings";
import mockRoadGoatData from './mockRoadGoatData';

describe("Ratings", () => {
  it("returns the city name", () => {
    cy.mount(<Ratings cityData={mockRoadGoatData}/>)
    cy.get('.ratings-div').should('exist')
    cy.get('img').should('be.visible')
    cy.wait(1000) 
  })
})