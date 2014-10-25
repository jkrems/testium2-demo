var injectBrowser = require('testium2/mocha');
describe('A simple app', function() {
  before(injectBrowser());
  it('responds with hello', function() {
    this.browser.navigateTo('/');
    this.browser.assert.elementHasText('h1', 'Hello');
  });
});
