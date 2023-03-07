import Lodging from './lodging'
import mockRoadGoatData from '../roadGoatStatsChart/mockRoadGoatData'


describe("Lodging component", () => {
    it('should render a button', () => {
    cy.mount(<Lodging cityData={mockRoadGoatData}/>)
    cy.get('button').should('exist');
  })
  it('should render two buttons', () => {
    cy.mount(<Lodging cityData={mockRoadGoatData}/>)
    cy.get('button').should('have.length', 2)
  })
})

