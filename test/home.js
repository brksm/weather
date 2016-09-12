import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;

browser.ignoreSynchronization = true;

describe('home', function () {
  before(function () {
    browser.get('http://localhost:8000');
  });
  it('page loaded', function (done) {
    expect(element(by.id('example-paragraph')).getText()).to.eventually.equal('Yo').notify(done);
  });
});
