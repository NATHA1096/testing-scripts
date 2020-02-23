describe('Habitica Web - Registro', function() {
    it('Registrarse, crear avatar y añadir intereses', function() {
        cy.visit('https://habitica.com')
	
        cy.get('.form').find('input[id="usernameInput"]').click().type("test_habitica_web")
        cy.get('.form').find('input[type="email"]').click().type("test_exitosa@example.com")
        cy.get('.form').find('input[type="password"]').first().click().type("PruebaExitosa.01")
        cy.get('.form').find('input[type="password"]').last().click().type("PruebaExitosa.01")
        cy.get('.form').contains('Sign Up').click()
        cy.wait(7000);
        cy.contains('Get Started!').click()
        var i;
        for (i = 0; i < 4; i++) {
            cy.get('.menu-item').eq(i).click()
            cy.get('.sub-menu-item').eq(0).click()
            cy.get('.outer-option-background').eq(1).click()
        }
        cy.contains('Next').click()
        cy.get('#exercise').check({force: true})
        cy.get('#health_wellness').check({force: true})
        cy.get('#self_care').check({force: true})
        cy.contains('Finish').click()
        cy.contains("Let's Go!").click() 
    })
})