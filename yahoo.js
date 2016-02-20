var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://yahoo.com')
  .type('input[title="Search"]', 'github nightmare')
  .click('#UHSearchWeb')
  .wait('#main')
  .screenshot('./yahoo.png')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(' - - - - - - - - - - - - - - - - - - result:')
    console.log(result);
  });
