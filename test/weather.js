const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

browser.ignoreSynchronization = true;

describe('weather page', function () {
  before(function () {
    browser.get('http://localhost:8000');
  });
  it('page is showing correct header', function (done) {
    expect($('h1').getText()).to.eventually.equal('Welcome to Moscow... here is your weather!').notify(done);
  });
  // TODO: These tests are quick and dirty and not very useful - need to improve
  it('there are more than 25 tiles on the page', function (done) {
    expect(element.all(by.css('.tile')).count()).to.eventually.be.above(25).notify(done);
  });
  it('there is a tile with a C in the temperature', function (done) {
    expect($('.tile .temp').getText()).to.eventually.include('C').notify(done);
  });
});
