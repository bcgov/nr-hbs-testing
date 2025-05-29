describe("Report Generation", () => {
    beforeEach(() => {
      cy.performSearch("report criteria");
    });
  
    it("should generate and send a report via email", () => {
      cy.get("#generate-report").click();
      cy.get(".report-success").should("contain", "Report generated successfully");
      cy.get(".email-confirmation").should("contain", "Report sent to your email");
    });
  });
  