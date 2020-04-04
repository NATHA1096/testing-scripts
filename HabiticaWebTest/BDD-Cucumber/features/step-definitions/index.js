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

  var modal = $('.navbar');

  modal.waitForDisplayed(8000);
  modal.waitForDisplayed(8000);

});

When('I open the Party tab', () => {
  var header = $('.navbar');
  header.waitForDisplayed(2000);
  header.waitForDisplayed(2000);
  if(header.isDisplayed()) {
    $('a=Party').click()
  }
});

When('I try to create a party', () => {
  if($('#create-party-modal___BV_modal_header_').isDisplayed()) {
    $('button=Create a Party').click()
  }
});

Then('I expect to see the party created', () => {
  if($('.introjs-tooltip introjs-floating').isDisplayed()) {
    $('a[role="button"]').click()
  }
 var text = browser.$('.title-details').getText();
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
    var input = cajaLogIn.$('input[type="text"]');
    input.click();
    //input.getText().clear();
    input.keys('Party test');    
  } 
   
});

Then('I expect to see the button disabled', () => {
  var input = $('.btn-primary');
  expect(input.attribs["disabled"]).toBe(true);
});

When(/^I write any description like (.*)$/ , (description) => {
  var cajaLogIn = $('#guild-form___BV_modal_body_');
  if (cajaLogIn.isDisplayed()) {
    var input = cajaLogIn.$('textarea[type="text"]');
    input.click();
    //input.getText().clear();
    input.keys(description);
    $('button[class="btn btn-primary btn-md"]').click();
  } 
   
});

Then('I expect to see the description added to the party', () => {
  var div = $('div[class="section"]')
  div.waitForDisplayed(2000);
  var text = div.$('p[class="markdown"]').getText();
 expect(text).to.include("Description test");  
});