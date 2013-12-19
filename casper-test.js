'use strict';

var Casper = require('casper').create();

Casper.start('http://adrenaline.com.br', function() {
  this.echo(this.getTitle(), 'INFO');
});

Casper.run();