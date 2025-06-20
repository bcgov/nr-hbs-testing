describe("Search Functionality", () => {
    beforeEach(() => {
      cy.performSearch("report criteria");
    });
  
    it("should display search results based on parameters", () => {
      cy.get(".search-results").should("be.visible");
    });
  });