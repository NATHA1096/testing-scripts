describe('Habitica Web - Create Party)', function() {
    
    asLogin();
    
    /* Escenarios exitosos*/

    it('Create a Party', function() {
        cy.get('#menu_collapse').contains('Party').click({force: true})
        cy.wait(3000)
        cy.get('#create-party-modal___BV_modal_content_').first().screenshot('modalParty')
        cy.get('#create-party-modal___BV_modal_header_').contains('Create a Party').click()
        cy.wait(2000)
        cy.get('#app-header').contains('Invite Friends')
        cy.get('#app').first().screenshot('partyCreated')
    });

    it('Edit Party missing name', function() {        
        cy.get('.buttons-wrapper').contains('Edit').click()
        cy.wait(1000)
        cy.get('#guild-form___BV_modal_content_').first().screenshot('modalEditParty')
        cy.get('input[type="text"]').clear()
        cy.get('form').find('button[disabled="disabled"]')
    });

    it('Edit Party successfully', function() {        
        cy.get('input[type="text"]').click().type('Editing party name')
        cy.get('textarea[type="text"]').click().type('any description')
        cy.get('form').contains('Update Party').click()
        cy.wait(1000)
        cy.get('.sticky').contains('Editing party name')
        cy.get('.sticky').contains('any description')
    });

    it('Delete the party created', function() {
        cy.get('.sticky').contains('Leave Party').click()
    });
})

function asLogin() {
    it('Visits Habitica and login succesfully', function() {
        cy.visit('https://habitica.com/login');    
        cy.get('#usernameInput').click().type('amespinosa11');
        cy.get('#passwordInput').click().type('Cypress123*');
        cy.get('#login-form').find('button[type="submit"]').click();
        cy.wait(5000)
    })
}