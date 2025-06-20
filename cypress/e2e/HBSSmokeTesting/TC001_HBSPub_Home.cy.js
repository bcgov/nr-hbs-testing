///<reference types = "cypress" />

describe('HBS Public Home Page Test', () => {
  beforeEach(() => {
     cy.visit(''); //Uses baseUrl from .env
  });

  it('should load the home page successfully', () => {
      // Check home page URL
      cy.url().should('eq', `${Cypress.config('baseUrl')}`);

      //Verify the page title
      cy.title().should('eq', `Harvest Billing System - ${Cypress.env('ENV')}`); // Verify the homepage title
      
      cy.get('img[alt="Welcome to the Harvest Billing System"]').should('be.visible')
      cy.get('head').should('exist'); // Check if head exists
      cy.get('body').should('exist'); // Check if body content exists
      cy.contains('You are here: Home'); //Check if main content exists
  });

  it('should verify and count all links on the homepage', () => {
  let totalLinks = 0;
  let checkedLinks = 0;

  cy.get('a').then(($links) => {
    totalLinks = $links.length;
    cy.log(`🔗 Total links found: ${totalLinks}`);
  });

  cy.get('a').each(($link, index) => {
    const href = $link.prop('href');

    // Skip anchors, JS, mailto, tel
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('javascript:') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:')
    ) {
      cy.request({
        url: href,
        failOnStatusCode: false,
      }).then((response) => {
        checkedLinks++;
        const status = response.status;

        cy.log(`✅ Link ${checkedLinks}: ${href} → Status ${status}`);

        expect(status, `Link ${href}`).to.be.lessThan(400);
      });
    } else {
      cy.log(`⚠️ Skipped: ${href || '[no href]'}`);
    }
  });
});
});

