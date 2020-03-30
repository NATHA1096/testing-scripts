describe('Habitica añadir tareas', function() {
    it('Visitar habitica, añadir distintas tareas y ejecutar test de edicion de cada una, por medio de busqueda', function() {
      cy.visit('https://habitica.com/')
	  cy.wait(3000)
      cy.contains('Login').click()
	  cy.wait(2000)
      //Lineas nuevas  
      cy.get('#usernameInput.form-control').click().type("amespinosa11")
	  cy.wait(2000)
	  cy.get('#passwordInput.form-control').click().type("Cypress123*")
	  cy.wait(2000)
      cy.get('button').contains('Login').click()
	  cy.wait(5000)
	  cy
		.get('textarea')
		.each(($el, index, $list) => {
			cy.log("1: "+ $el.placeholder)
			
			switch (index) {
				case 0:
				cy.wrap($el).click({force: true}).type("Leer 30 min", {force: true})
				cy.wrap($el).click({force: true}).type('{enter}', {force: true})
				cy.get('#app').screenshot('agregarHabito')
				break;
				case 1:
				cy.wrap($el).click({force: true}).type("Desayunar 7AM", {force: true})
				cy.wrap($el).click({force: true}).type('{enter}', {force: true})
				cy.get('#app').screenshot('agregarDiaria')
				break;
				case 2:
				cy.wrap($el).click({force: true}).type("Hacer aseo", {force: true})
				cy.wrap($el).click({force: true}).type('{enter}', {force: true})
				cy.get('#app').screenshot('agregarPendiente')
				break;
				case 3:
				cy.wrap($el).click({force: true}).type("Tomar un par de cervezas", {force: true})
				cy.wrap($el).click({force: true}).type('{enter}', {force: true})
				cy.get('#app').screenshot('agregarRecompensa')
				break;
				default:
				break;
			}
	})
	buscarYeditarTarea('Leer 30 min','Leer 60 min')
	buscarYeditarTarea('Desayunar 7AM','Desayunar 9AM')
	buscarYeditarTarea('Hacer aseo','Cocinar')
	buscarYeditarTarea('Tomar un par de cervezas','Comer helado de chocolate')

	eliminarTarea('Leer 60 min')
    eliminarTarea('Desayunar 9AM')
    eliminarTarea('Cocinar')
    eliminarTarea('Comer helado de chocolate')
    })
})

function buscarYeditarTarea(titulo, nuevoTitulo) {
	cy.get('input').eq(0).click({force: true}).type(titulo, {force: true})
	cy.wait(2000)
	cy.screenshot('buscar'+titulo)
	cy.contains(titulo).click({force: true})
	if(titulo != 'Tomar un par de cervezas'){
		cy.wait(2000)		
		cy.contains('Medium').click({force: true})
		cy.get('.modal').screenshot('modal'+titulo);
	}	
	cy.get('#task-modal').within(() => {
		cy.wait(2000)
		cy.get('input').eq(0).click({force: true}).clear({force: true}) // Only yield inputs within form
		cy.wait(2000)
		cy.get('input').eq(0).click({force: true}).type(nuevoTitulo)
		cy.wait(2000)
	})
	cy.get('.modal').screenshot('editar'+nuevoTitulo);
	cy.get('button').contains('Save').click({force: true})
	cy.wait(2000)
	cy.get('input').eq(0).click({force: true}).clear({force: true})
}

function eliminarTarea(titulo) {    
    cy.visit('https://habitica.com/')
    cy.contains(titulo).click({force: true})
    cy.wait(2000)
    cy.get('.delete-task-btn').click({force: true})
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

