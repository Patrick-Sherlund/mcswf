describe('Home Page', () => {
  it('Should load the homepage, and fade in each element with an animation, then navigate to Learn More page upon clicking nav arrow', () => {
    cy.visit('http://localhost:3000/')


    cy.get('[data-testid=home-container]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-content-light]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-content-bold]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-facebook]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-instagram]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-linkedin]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-twitter]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-youtube]').should('not.have.css', 'opacity', '1');
    cy.get('[data-testid=home-navigation-arrow]').should('not.have.css', 'opacity', '1');

    cy.wait(2800);

    cy.get('[data-testid=home-container]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-title-top-primary]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-title-divider]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-title-top-secondary]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-content-light]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-content-bold]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-facebook]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-instagram]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-linkedin]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-twitter]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-social-youtube]').should('have.css', 'opacity', '1');
    cy.get('[data-testid=home-navigation-arrow]').should('have.css', 'opacity', '1');

    cy.get('[data-testid=home-navigation-arrow-link]').click();

    cy.wait(1000);

    cy.get('[data-testid=learn-more-container]').should('have.css', 'opacity', '1');

  })
})
