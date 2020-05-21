const errorBlankMessage = 'You cannot send a blank message';
const userNotFound = 'User not found';
const invalidParameters = 'Invalid request parameters';
const invitationSent = 'Invitation sent';

describe('Habitica Web - Party Members)', function() {
    
    asLogin();
    
    /* Escenarios exitosos*/

    it('Create a Party', function() {
        cy.get('#menu_collapse').contains('Party').click({force: true})
        cy.wait(3000)
        cy.get('#create-party-modal___BV_modal_header_').contains('Create a Party').click()
        cy.wait(2000)
        cy.get('#app-header').contains('Invite Friends')
    });

    it('View Party members', function() {        
        cy.get('.icon-row').find('.item-with-icon').click()
        cy.wait(2000)        
        cy.get('.member-details').contains('amespinosa11')
        cy.get('#members-modal___BV_modal_content_').first().screenshot('modalMembers')
        cy.get('.modal-footer').contains('Close').click()
    });

    it('Send a blank message to Party members', function() {        
        cy.get('.chat-actions').contains('Send').click()
        cy.wait(1000)
        cy.get('.notifications').contains(errorBlankMessage)
        cy.get('#app').first().screenshot('blankMessage')
    });

    it('Send a message to Party members successfully', function() {
        cy.reload()
        cy.wait(4000)
        cy.get('#usernameInput').click().type('amespinosa11');
        cy.get('#passwordInput').click().type('Cypress123*');
        cy.get('#login-form').find('button[type="submit"]').click();
        cy.wait(4000)
        cy.request('https://my.api.mockaroo.com/habiticaeditparty.json?key=38f58a20').then((response) => {
            cy.get('.chat-row').find('textarea').click().type(response.body.desciption)
            cy.get('.chat-actions').contains('Send').click()
            cy.wait(3000)
            cy.get('.card').contains(response.body.desciption)
        })
        cy.get('#app').first().screenshot('messagedAdded')
    });

    it('Invite friends to the party - wrong user', function() {   
        cy.get('#app-header').contains('Invite Friends').click()    
        cy.wait(2000)
        cy.get('#invite-modal___BV_modal_content_').first().screenshot('modalInvite')
        cy.request('https://my.api.mockaroo.com/habiticaeditparty.json?key=38f58a20').then((response) => {
            cy.get('.input-group').first().click().type(response.body.name)
        })
        cy.wait(1000)
        cy.get('#invite-modal___BV_modal_body_').contains(userNotFound)
        cy.get('#invite-modal___BV_modal_content_').first().screenshot('modalInviteErrorUser')
    });

    it('Invite friends to the party - wrong input', function() {   
        cy.get('.input-group').first().find('input[type="text"]').clear().type('?')
        cy.wait(1000)
        cy.get('#invite-modal___BV_modal_body_').contains(invalidParameters)
        cy.get('#invite-modal___BV_modal_content_').first().screenshot('modalInviteErrorInvalid')
    });

    it('Invite friends to the party successfully', function() {   
        cy.get('.input-group').first().find('input[type="text"]').clear().type('test_habitica_web1')
        cy.wait(1000)
        cy.get('#invite-modal___BV_modal_content_').first().screenshot('modalInviteSuccess')
        cy.get('.modal-footer').contains('Send Invites').click()
        cy.wait(1000)
        cy.get('.notifications').contains(invitationSent)
        cy.get('#app').first().screenshot('invitationSent')
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