import SafetyRatings from "./safetyRatings";
import seven from './safety7';
import belowzero from './safety-2';

describe("SafetyRatings", () => {
  it('displays the max amount of safety icons when a number more than 5 is entered', () => {
    cy.mount(<SafetyRatings cityData={seven}/>)
    cy.get('.ratings-div img.safety-full').should('have.length', 5)
  })
  it('displays the min amount of safety icons when a number less than 0 is entered', () => {
    cy.mount(<SafetyRatings cityData={belowzero}/>)
    cy.get('.ratings-div img.safety-empty').should('have.length', 5)
  })
})