describe('Habitica Web - Challenges)', function() {
    
    asLogin();

    it('Create a Party', function() {
        cy.get('#menu_collapse').contains('Party').click({force: true})
        cy.wait(5000)
        cy.get('#create-party-modal___BV_modal_header_').contains('Create a Party').click()
        cy.wait(3000)
        cy.get('#app-header').contains('Invite Friends')
    });

    it('Create a Challenge', function() {
        cy.wait(3000)
        cy.get('.no-quest-section').contains('Create Challenge').click({force: true})
        cy.wait(3000)
        cy.get('#challenge-modal').screenshot('modalChallenge')
        cy.request('https://my.api.mockaroo.com/habiticaeditparty.json?key=38f58a20').then((response) => {
            cy.get('input[type="text"]').first().click().type(response.body.name)
            cy.get('input[type="text"]').last().click().type(response.body.name)
            cy.get('textarea[class="summary-textarea form-control"]').click().type(response.body.desciption)
            cy.get('textarea[class="description-textarea form-control"]').click().type(response.body.desciption)
        })
        cy.get('select[class="form-control"]').first().select("amespinosa11's Party")
        cy.get('.category-select').click({ force: true })
        cy.wait(1000)
        cy.get('label[for="challenge-modal-cat-self_improvement"]').click()
        cy.get('input[type="number"]').clear().type('0')
        cy.get('.submit-button-wrapper').contains('Add Challenge Tasks').click()
        cy.get('#challenge-modal').screenshot('modalChallengeTwo')
        cy.wait(3000)
    });

    it('Join to a challenge created', function() {     
        cy.get('#app').first().screenshot('challengeCreated')   
        cy.get('.container-fluid').contains('Join Challenge').click()
        cy.wait(2000)
        cy.get('#app').first().screenshot('joinedChallenge') 
    });

    it('Edit Challenge successfully', function() {
        cy.get('.container-fluid').contains('Edit Challenge').click()
        cy.wait(2000)
        cy.request('https://my.api.mockaroo.com/habiticaeditparty.json?key=38f58a20').then((response) => {
            cy.get('input[type="text"]').first().clear({force: true}).type(response.body.name, {force: true})
            cy.get('input[type="text"]').last().clear({force: true}).type(response.body.name, {force: true})
            cy.get('textarea[class="summary-textarea form-control"]').clear().type(response.body.desciption)
            cy.get('textarea[class="description-textarea form-control"]').clear().type(response.body.desciption)
        })
        cy.get('.submit-button-wrapper').contains('Update Challenge').click()
        cy.wait(3000)
    });

    it('Choose a winner and Finish the challenge', function() {
        cy.get('.container-fluid').contains('End Challenge').click()
        cy.wait(3000)
        cy.get('#close-challenge-modal___BV_modal_content_').screenshot('chooseWinner')
        cy.get('button[class="btn dropdown-toggle btn-secondary"]').first().click({force: true})
        cy.get('.dropdown-item').contains('@amespinosa11').click({force: true})
        cy.get('#close-challenge-modal___BV_modal_body_').contains('Award Winner').click()
        cy.wait(4000)
        cy.get('#won-challenge___BV_modal_content_').screenshot('winChallenge')
        cy.get('#won-challenge___BV_modal_body_').contains('Hurray').click()
        cy.wait(4000)
        cy.get('#app').first().screenshot('challenges') 
    });

    it('Delete the party created', function() {
        cy.get('#menu_collapse').contains('Party').click({force: true})
        cy.wait(4000)
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