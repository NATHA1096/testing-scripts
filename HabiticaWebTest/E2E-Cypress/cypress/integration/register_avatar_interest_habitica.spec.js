const usernameAlreadyTaken = 'Username already taken.';
const passwordCharacters = 'Password must be 8 characters or more.';
const passwordMatch = "Password confirmation doesn't match password.";

describe('Habitica Web - Register', function() {

    /* Pruebas con errores */

    it('Register with an username already taken', ()=> {
        cy.visit('https://habitica.com');
        cy.get('.form').find('input[id="usernameInput"]').click().type("test_habitica_web1")
        cy.contains(usernameAlreadyTaken);
    });
    
    it('Register with a password less than 8 characters', ()=> {
        cy.visit('https://habitica.com');
        cy.get('.form').find('input[id="usernameInput"]').click().type("test_habitica_web30")
        cy.get('.form').find('input[type="email"]').click().type("test_exitosa1@example.com")
        cy.get('.form').find('input[type="password"]').first().click().type("12345")
        cy.get('.form').find('input[type="password"]').last().click().type("12345")
        cy.contains(passwordCharacters);
    });
    
    it("Register with two passwords which don't match", ()=> {
        cy.visit('https://habitica.com');
        cy.get('.form').find('input[id="usernameInput"]').click().type("test_habitica_web30")
        cy.get('.form').find('input[type="email"]').click().type("test_exitosa1@example.com")
        cy.get('.form').find('input[type="password"]').first().click().type("12345678")
        cy.get('.form').find('input[type="password"]').last().click().type("123456")
        cy.contains(passwordMatch);
    });    

    /* Prueba exitosa */

    it('Register, create avatar and add interest', function() {
        cy.visit('https://habitica.com');
        cy.get('.form').find('input[id="usernameInput"]').click().type("test_habitica_web8")
        cy.get('.form').find('input[type="email"]').click().type("test_exitosa8@example.com")
        cy.get('.form').find('input[type="password"]').first().click().type("PruebaExitosa.01")
        cy.get('.form').find('input[type="password"]').last().click().type("PruebaExitosa.01")
        cy.get('.form').contains('Sign Up').click({force: true})
        cy.wait(5000);
        cy.contains('Get Started!').click()
        var i,j;
        for (i = 0; i < 4; i++) {
            cy.get('.menu-item').eq(i).click()
            cy.get('.sub-menu-item').then($links => {
                for (j = 0; j < $links.length; j++) {
                    var link = $links.get(j);
                    if(!Cypress.dom.isHidden(link) && !Cypress.dom.isDetached(link)) {
                        cy.wrap(link).click({force: true});
                        cy.get('.outer-option-background').eq(1).click()
                    }                    
                }                
            });
        }
        cy.contains('Next').click()
        cy.get('#exercise').check({force: true})
        cy.get('#health_wellness').check({force: true})
        cy.get('#self_care').check({force: true})
        cy.contains('Finish').click()
        cy.contains("Let's Go!").click() 
    })
})