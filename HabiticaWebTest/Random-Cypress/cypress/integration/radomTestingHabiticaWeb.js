describe('Habitica random testing', function () {

  beforeEach(() => {
    cy.visit('https://habitica.com/login');
  });


  it('Visitar habitica y ejecutar random testing', function () {
    cy.wait(3000)
    cy.contains('Login').click()
    cy.wait(2000)
    cy.get('#usernameInput.form-control').click().type("jmauricio")
    cy.wait(2000)
    cy.get('#passwordInput.form-control').click().type("jmauricio0101")
    cy.wait(2000)
    cy.get('button').contains('Login').click()
    cy.wait(2000)
    //cy.get('.close').click()
    randomTest(50);
  })
})

const events = {
  buttonClick: 1,
  textClick: 2,
  linkClick: 3,
  maxEvents: 4
  //comboClick:  4,
  //maxEvents:	 5
}

function randomTest(monkeysLeft) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
    var event = getRandomInt(events.buttonClick, events.maxEvents);//se elige el evento entre el minimo y el maximo
    cy.log("Evento:" + event)

    switch (event) {
      case events.linkClick:
        cy.log("linkClick")
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if (!Cypress.dom.isHidden(randomLink)) {
            cy.log("linkClick_notHidden")
            cy.wrap(randomLink).click({ force: true });
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(1000);
          randomTest(monkeysLeft);
        });
        break;
      case events.textClick:
        cy.log("textClick")
        cy.request('https://my.api.mockaroo.com/monkeyhabitica.json?key=e1a233b0').then((response) => {
          cy.get('input').then($inputs => {
            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
            if (!Cypress.dom.isHidden(randomInput)) {
              cy.log("textClickNotHidden")
              cy.wrap(randomInput).click({ force: true }).type(response.body.data, { force: true });
              monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomTest(monkeysLeft);
          });
        })
        break;
      case events.buttonClick:
        cy.log("buttonClick")
        cy.get('button').then($bottons => {
          var randomButton = $bottons.get(getRandomInt(0, $bottons.length));
          if (!Cypress.dom.isHidden(randomButton)) {
            cy.log("buttonClickNotHidden")
            cy.wrap(randomButton).click({ force: true });
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(1000);
          randomTest(monkeysLeft);
        });
        break;
      /*case events.comboClick:
        cy.log("comboClick")
        cy.get('select').then($selects => {
          var randomSelect = $selects.get(getRandomInt(0, $selects.length));
          if(!Cypress.dom.isHidden(randomSelect)) {
            cy.log("comboClickNotHidden")
            cy.wrap(randomSelect).select();   
            monkeysLeft = monkeysLeft - 1;                 
          }     
          cy.wait(1000);    
          randomTest(monkeysLeft);          
        });
        break;*/

      default:
        cy.log("evento no existe")
        break;
    }
  }
}
