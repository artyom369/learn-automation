module.exports = {
    '@tags': ['demo'],
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .click('.gb_b.gb_fc')
        .pause(9000)
        .end();
  }
};
  