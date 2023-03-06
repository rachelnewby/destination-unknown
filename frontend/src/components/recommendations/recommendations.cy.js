import Recommendations from './recommendations'
import mockRoadGoatData from '../roadGoatStatsChart/mockRoadGoatData'

describe("Recommendations component", () => {
    it('should render a button', () => {
    cy.mount(<Recommendations cityData={mockRoadGoatData}/>)
    cy.get('button').should('exist');
  })
  it('should render two buttons', () => {
    cy.mount(<Recommendations cityData={mockRoadGoatData}/>)
    cy.get('button').should('have.length', 4)
  })
})
