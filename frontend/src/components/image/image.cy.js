import Image from "./image.js";

const mockImage = {
  photo:
    "https://cdn.roadgoat.com/uploads/photo/image/2136/medium_steffen-muldbjerg-nMfmwgyZn3I-unsplash.jpg",
};

describe("Image", () => {
  it("displays an image for each destination", () => {
    cy.mount(<Image imageData={mockImage} />);
    cy.get("#image-div").should("be.visible");
  });
});
