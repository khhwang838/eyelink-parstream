var CONSTS = require('./consts');
var Utils = require('./util');
var express = require('express');
var router = express.Router();

var QueryProvider = require('./dao/' + global.config.fetchData.database + '/'+ config.fetchData.method + '-db').QueryProvider;
var queryProvider = new QueryProvider();

var mainmenu = {dashboard:'', reports:'', timeseries:'', management: ' open selected', users:'', settings:''};


/* GET reports page. */
router.get('/', function(req, res, next) {
  // console.log(_rawDataByDay);
  mainmenu.dashboard = ' open selected';
  mainmenu.timeseries = '';
  res.render('./dashboard/main', { title: 'EyeLink for ParStream', mainmenu:mainmenu});
});

router.get('/timeseries', function(req, res, next) {
  // console.log(_rawDataByDay);
  mainmenu.dashboard = '';
  mainmenu.timeseries = ' open selected';
  res.render('./dashboard/timeseries', { title: 'EyeLink for ParStream', mainmenu:mainmenu });
});

module.exports = router;