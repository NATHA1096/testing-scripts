const genericErrorMessage = `Uh-oh - your email address / username or password is incorrect.
- Make sure they are typed correctly. Your username and password are case-sensitive.
- You may have signed up with Facebook or Google-sign-in, not email so double-check by trying them.
- If you forgot your password, click "Forgot Password".`;

const missingUsername = 'Missing username or email.';
const missingPassword = 'Missing password.';

describe('Habitica web login', () => {

    beforeEach( () => {
        cy.visit('https://habitica.com/login');
    });

    /* Pruebas con errores */

    it('Visits habitica and login fails', ()=> {
        // Llenar form con datos de login
        cy.get('#usernameInput').click().type('cuentafalsa@nada.com');
        cy.get('#passwordInput').click().type('password');
        cy.get('#login-form').find('button[type="submit"]').click();
        cy.get('.error[data-v-7d0d32a2]').should('be.visible');
        cy.get('.form-wrapper').first().screenshot('loginGenericError');
    });

    it('Complete form without username. Username missing', ()=> {
        // Llenar form con datos de login
        cy.get('#passwordInput').click().type('password');
        cy.get('#login-form').find('button[type="submit"]').click();
        cy.contains(missingUsername);
        cy.get('.form-wrapper').first().screenshot('loginUsernameMissing')
    });
    
    it('Complete form without password. Password missing', ()=> {
        // Llenar form con datos de login
        cy.get('#usernameInput').click().type('cuentafalsa@nada.com');
        cy.get('#login-form').find('button[type="submit"]').click();
        cy.contains(missingPassword);
        cy.get('.form-wrapper').first().screenshot('LoginPasswordMissing');
    });

    /* Prueba exitosa */
    it('Complete form and redirect to dashboard', ()=> {
        // Llenar form con datos de login
        cy.get('#usernameInput').click().type('amespinosa11');
        cy.get('#passwordInput').click().type('Cypress123*');

        cy.get('#login-form').find('button[type="submit"]').click();

        cy.contains('Tasks');
        cy.get('.container-fluid').first().screenshot('loginSuccess')
    });
})