'use strict';

var express = require('express'),
	config = require('./config'),
	app = express();

app.set('port', process.env.PORT || config.port || 3030);
app.use(express.static(config.dir));
app.listen(app.get('port'));
