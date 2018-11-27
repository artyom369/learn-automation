module.exports = {
    'Demo test Google' : function (Chrome) {
      Chrome
        .url('https://webark.com')
        .waitForElementVisible('body', 10000)
        .click('div.authentication>a')
        //.waitForElementVisible('body', 10000)
        .setValue('input[type=email]', 'am369.test@gmail.com')
        .setValue('input[type=password]', 'artyom369')
        .waitForElementVisible('body', 1000)
        .click('button[name=submit]')
        .pause(1000)
        .click('.add-item')
        .pause(1000)
        .click('a.link-buy[href="/site/create/19"]')
        .pause(1000)
        .click('b[href="Pages"]')
        //.click('a[href="/dashboard"]')
        .pause(4000)
        // .click('.site:first-child > .link-upgrate')
        //.assert.containsText('#main', 'Night Watch')
        .end();
    }
  };