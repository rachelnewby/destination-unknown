import Cases from './covidCases'
import mockRoadGoatData from '../roadGoatStatsChart/mockRoadGoatData'

describe("Cases component", () => {
  it('should display tooltip with information on hover', () => {
    cy.mount(<Cases cityData={mockRoadGoatData}/>);
    
    cy.get('span[title="Based on 7-day Covid Cases per 100k people in the country provided by Worldometer"]')
      .should('have.attr', 'title', 'Based on 7-day Covid Cases per 100k people in the country provided by Worldometer');
  })
})
