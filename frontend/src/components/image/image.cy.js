import mockRoadGoatData from "../roadGoatStatsChart/mockRoadGoatData";
import Image from "./image.js";

describe('Image', () => {
    it('displays an image for each destination', () => {
      cy.mount(<Image goatData={mockRoadGoatData} /> )
        cy.get('#image-div')
        .should('be.visible')
      });
    });
  
  