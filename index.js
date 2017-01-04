'use strict';
var express = require('express'),  
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      port = process.env.PORT || 3002,
      controllers = require('./controllers')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(controllers)

app.listen(port, function() {
    console.log('Server running on port ' + port)
})