var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I login into Habitica website', () => {
  browser.url('/login');  
  
  var mailInput = $('input[id="usernameInput"]');
   mailInput.click();
   mailInput.setValue('test_habitica_web2');
  
   var passwordInput = $('input[id="passwordInput"]');
   passwordInput.click();
   passwordInput.setValue('PruebaExitosa.01')

  $('button[type="submit"]').click();

  var body = $('div[id="app"]');

  body.waitForDisplayed(8000);
  body.waitForDisplayed(8000);

});

When('I open the Party tab', () => {
  $('div[id="app"]').waitForDisplayed(3000) 
  if($('div[id="app"]').isDisplayed()) {     
    $('li[class="nav-item topbar-item"]').click() 
  }
});

When('I try to create a party', () => {
  var modal = $('#create-party-modal___BV_modal_header_'); 
  modal.waitForExist(5000); 
  modal.waitForDisplayed(5000) 
  if(modal.isDisplayed()) {     
    browser.saveScreenshot('./features/screenshots/crear-editar-equipo/createParty.png');
    $('button=Create a Party').click()
  }
});

Then('I expect to see the party created', () => {
  if($('.introjs-tooltip introjs-floating').isDisplayed()) {
    $('a[role="button"]').click()
  }
 var text = browser.$('.title-details').getText();
 browser.saveScreenshot('./features/screenshots/crear-editar-equipo/partyCreated.png');
 expect(text).to.include("test_habitica_web2's Party");   
});

Given('I go to the party created', () => {
  browser.url('/party');
});

When('I try to edit it', () => {
  $('button=Edit').click();  
});

When('I change the name', () => {
  var cajaLogIn = $('#guild-form___BV_modal_body_');
  if (cajaLogIn.isDisplayed()) {
    browser.saveScreenshot('./features/screenshots/crear-editar-equipo/editParty.png'); 
    var input = cajaLogIn.$('input[type="text"]');
    input.click();
    //input.getText().clear();
    input.keys('Party test');    
  } 
   
});

Then('I expect to see the button disabled', () => {
  var input = $('.btn-primary');
  //expect(input.attribs["disabled"]).toBe(true);
});

When('I write any description like', () => {
  var cajaLogIn = $('#guild-form___BV_modal_body_');
  if (cajaLogIn.isDisplayed()) {
    var input = cajaLogIn.$('textarea[type="text"]');
    input.click();
    //input.getText().clear();
    input.keys('Description test'); 
    browser.saveScreenshot('./features/screenshots/crear-editar-equipo/editDescription.png');
    $('button[class="btn btn-primary btn-md"]').click();
  } 
   
});

Then('I expect to see the description added to the party', () => {
  var div = $('div[class="px-3 py-3"]') 
  div.waitForExist(5000); 
  div.waitForDisplayed(5000); 
  browser.saveScreenshot('./features/screenshots/crear-editar-equipo/descriptionAdded.png'); 
  //var text = div.$('p[class="markdown"]').getText(); 
 //expect(text).to.include("Description test"); 
 browser.url('/party'); 
 var body = $('div[class="col-12 col-sm-4 sidebar"]'); 
 body.waitForExist(5000); 
 body.waitForDisplayed(5000); 
 if (body.isDisplayed()) { 
  $('button[class="btn btn-danger"]').click(); 
 }
});