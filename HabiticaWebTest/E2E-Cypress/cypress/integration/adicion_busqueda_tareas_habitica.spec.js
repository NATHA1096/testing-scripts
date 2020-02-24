
describe('Habitica añadir tareas', function() {
    it('Visitar habitica, añadir distintas tareas y ejecutar test de edicion de cada una, por medio de busqueda', function() {
      cy.visit('https://habitica.com/')
	  cy.wait(3000)
      cy.contains('Iniciar').click()
	  cy.wait(2000)
      //Lineas nuevas  
      cy.get('#usernameInput.form-control').click().type("jmauricio")
	  cy.wait(2000)
	  cy.get('#passwordInput.form-control').click().type("jmauricio0101")
	  cy.wait(2000)
      cy.get('button').contains('Iniciar sesión').click()
	  cy.wait(3000)
	  cy
		.get('textarea')
		.each(($el, index, $list) => {
			cy.log("1: "+ $el.placeholder)
			
			switch (index) {
				case 0:
				cy.wrap($el).click().type("Leer 30 min")
				cy.wrap($el).click().type('{enter}')
				break;
				case 1:
				cy.wrap($el).click().type("Desayunar 7AM")
				cy.wrap($el).click().type('{enter}')
				break;
				case 2:
				cy.wrap($el).click().type("Hacer aseo")
				cy.wrap($el).click().type('{enter}')
				break;
				case 3:
				cy.wrap($el).click().type("Tomar un par de cervezas")
				cy.wrap($el).click().type('{enter}')
				break;
				default:
				break;
			}
	})
	buscarTarea('Leer 30 min','Leer 60 min')
	buscarTarea('Desayunar 7AM','Desayunar 9AM')
	buscarTarea('Hacer aseo','Cocinar')
	buscarTarea('Tomar un par de cervezas','Comer helado de chocolate')
    })
})

function buscarTarea(titulo, nuevoTitulo) {
	cy.get('input').eq(0).click().type(titulo)
	cy.wait(2000)
	cy.contains(titulo).click()
	if(titulo != 'Tomar un par de cervezas'){
		cy.wait(2000)
		cy.contains('Intermedia').click()
	}
	
	cy.get('#task-modal').within(() => {
		cy.wait(2000)
		cy.get('input').eq(0).click().clear() // Only yield inputs within form
		cy.wait(2000)
		cy.get('input').eq(0).click().type(nuevoTitulo)
		cy.wait(2000)
	})
	cy.get('button').contains('Guardar').click()
	cy.wait(2000)
	cy.get('input').eq(0).click().clear()
}

/*function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function divide (a, b) {
  return a / b
}

function multiply (a, b) {
  return a * b
}
// -- End: Our Application Code --

// -- Start: Our Cypress Tests --
describe('Unit test our math functions', function() {
  context('math', function() {
    it('can add numbers', function() {
      expect(add(1, 2)).to.eq(3)
    })

    it('can subtract numbers', function() {
      expect(subtract(5, 12)).to.eq(-7)
    })

    specify('can divide numbers', function() {
      expect(divide(27, 9)).to.eq(3)
    })

    specify('can multiply numbers', function() {
      expect(multiply(5, 4)).to.eq(20)
    })
  })
})*/

