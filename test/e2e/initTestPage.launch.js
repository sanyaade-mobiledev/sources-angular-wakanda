//this file is only here to force a first page to be loaded, since protractor.get is sync 
//and getCurrentUrl wont work inside beforeEach loops if there is no page loaded
describe("launch",function(){
  browser.get('/#/');
});