///<reference types = "cypress" />

describe('HBS Public Home Page Test', () => {
  const homePageUrl = 'https://test.a100.gov.bc.ca/pub/hbs/'; //Home Page URL
  const expectedTitle = 'Harvest Billing System - TEST'; // Expected Webpage title

  it('should verify the homepage title is correct', () => {
      cy.visit(homePageUrl);
      cy.title().should('eq', expectedTitle); // Verify the homepage title
  });

  it('should verify all links on the homepage are working', () => {
      cy.visit(homePageUrl);

      cy.get('a').each(($link) => {
          const href = $link.attr('href');

          if (href && !href.startsWith('#')) { // Ignore empty and anchor links
              cy.request(href).then((response) => {
                  expect(response.status).to.eq(200); // Check link response status
              });
          }
      });
  });
});

