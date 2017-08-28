var CONSTS = require('./consts');
var Utils = require('./util');
var express = require('express');
var fs = require('fs');
var net = require('net');
var router = express.Router();
var QueryProvider = require('./dao/' + global.config.fetchData.database + '/'+ config.fetchData.method).QueryProvider;

var queryProvider = new QueryProvider();

var mainmenu = {dashboard:'', timeseries:'', reports:'', analysis: 'open selected', management:'', settings:''};


/* GET reports page. */
router.get('/', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/clustering', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/clustering', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/clustering', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/cluster_detail', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/cluster_detail', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/clusteringPop', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/clustering_popup', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/runalaysis', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/runanalysis', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/anomaly', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/anomaly', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/anomaly_new', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/anomaly_new', { title: global.config.productname, mainmenu:mainmenu});
});

router.get('/postTest', function(req, res, next) {
  console.log(_rawDataByDay);
  res.render('./analysis/postTest', { title: global.config.productname, mainmenu:mainmenu});
});

router.post('/restapi/insertAnomaly/:id', function(req, res, next) {  
  console.log('/analysis/restapi/insertAnomaly');    
  console.log(JSON.stringify(req.body));
   var id = req.params.id;
   var in_data = {    INDEX: "analysis", TYPE: "anomaly", ID: id   };  
   queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {        
    if (out_data[0] != null){
      var rtnCode = CONSTS.getErrData('E005');
      console.log(rtnCode);
      res.json({rtnCode: rtnCode});
    }  else  {
      var in_data = {    INDEX: "analysis", TYPE: "anomaly", ID: id,   BODY : JSON.stringify(req.body)   };  
     queryProvider.insertQueryByID("analysis", "insertById", in_data, function(err, out_data) {        
          console.log(out_data);
          if(out_data.result == "created"){
            console.log(out_data);  
            var rtnCode = CONSTS.getErrData("D001");                   
          }
        if (err) { console.log(err) };                     
        res.json({rtnCode: rtnCode});    
      });
    }
  });
});

router.post('/restapi/updateAnomaly/:id', function(req, res, next) {  
  console.log('/analysis/restapi/updateAnomaly');    
  console.log(JSON.stringify(req.body));
  var in_data = {  INDEX: "analysis", TYPE: "anomaly", ID: req.params.id };  
  queryProvider.deleteQueryByID("analysis", "deleteById", in_data, function(err, out_data) {
    if(out_data.result == "deleted"){
      var rtnCode = CONSTS.getErrData("D003");
      var in_data = {    INDEX: "analysis", TYPE: "anomaly", ID: req.params.id,  BODY : JSON.stringify(req.body)     };  
     queryProvider.insertQueryByID("analysis", "insertById", in_data, function(err, out_data) {                  
        if(out_data.result == "created"){          
          rtnCode = CONSTS.getErrData("D001");                   
        }
        if (err) { console.log(err) };                     
        res.json({rtnCode: rtnCode});    
      });
     rtnCode = CONSTS.getErrData("D002");  
    }
    res.json({rtnCode: rtnCode});
  });  
});

router.delete('/restapi/deleteAnomaly/:id', function(req, res, next) {  
  console.log('/analysis/restapi/deleteAnomaly');      
  var in_data = {  INDEX: "analysis", TYPE: "anomaly", ID: req.params.id };  
  queryProvider.deleteQueryByID("analysis", "deleteById", in_data, function(err, out_data) {
    if(out_data.result == "deleted"){
      var rtnCode = CONSTS.getErrData("D003");    
    }
    res.json({rtnCode: rtnCode});
  });  
});

// query RawData
router.get('/restapi/getAnomaly/:id', function(req, res, next) {
  console.log(req.query);
  var in_data = {  INDEX: "analysis", TYPE: "anomaly" , ID: req.params.id}
  queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {
    console.log(out_data);
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data.length == 0) {
      rtnCode = CONSTS.getErrData('0001');
      console.log('test');
      res.json({rtnCode: rtnCode});
    }
    console.log('analysis/restapi/getDaClusterDetail -> length : %s', out_data.length);
    res.json({rtnCode: rtnCode, rtnData: out_data[0]._source});
  })
});

router.post('/restapi/insertAnomalyPattern/:id', function(req, res, next) {  
  console.log('/analysis/restapi/insertAnomalyPattern');    
  console.log(JSON.stringify(req.body));   
   var in_data = {    INDEX: "analysis", TYPE: "anomaly_pattern", ID: req.params.id   };  
   queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {        
    if (out_data[0] != null){
      var rtnCode = CONSTS.getErrData('E005');      
    }  else  {      
      var in_data = {    INDEX: "analysis", TYPE: "anomaly_pattern", ID: req.params.id,   BODY : JSON.stringify(req.body)   };  
     queryProvider.insertQueryByID("analysis", "insertById", in_data, function(err, out_data) {        
          if(out_data.result == "created"){
            console.log(out_data);  
            var rtnCode = CONSTS.getErrData("D001");                   
          }
        if (err) { console.log(err) };                     
        res.json({rtnCode: rtnCode});    
      });     
    }
     res.json({rtnCode: rtnCode});    
  });

});

// query RawData
router.get('/restapi/getAnomalyPattern/:id', function(req, res, next) {  
  var in_data = {  INDEX: "analysis", TYPE: "anomaly_pattern" , ID: req.params.id}  
  queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {    
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data.length === 0000) {
      rtnCode = CONSTS.getErrData('0001');      
      res.json({rtnCode: rtnCode});
    } else {
      console.log('f');
      console.log(out_data);
      var mon = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr' : '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12' };
      var day = new Date().toString().split(' ');
      var id = day[3]+'-'+mon[day[1]]+'-'+day[2];
      var in_data = {  INDEX: "analysis", TYPE: "anomaly" , ID: id };      
      var pattern = out_data[0]._source ;      
      queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data,  function(err, out_data, params) {        
        var clust = out_data[0]._source.pattern_data;
        console.log(pattern);
        var rtnCode = CONSTS.getErrData('0000');
        if (out_data[0] === null) {   rtnCode = CONSTS.getErrData('0001');     
         res.json({rtnCode: rtnCode});   }
        console.log('analysis/restapi/getAnomaly -> length : %s', out_data.length);
        res.json({rtnCode: rtnCode, pattern : pattern, clust : clust});
      });
    }
        console.log('analysis/restapi/getAnomalyPattern -> length : %s', out_data.length);
        res.json({rtnCode: rtnCode, pattern : pattern, clust : clust});
  });  
});

// query RawData
router.get('/restapi/getAnomalyChartData', function(req, res, next) {    
  var now = new Date(parseInt(req.query.now));   
  console.log(now);
  var e = now.toString().split(' ');
  var s = new Date(now.getTime()-10*60*1000).toString().split(' ');
  var mon = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr' : '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12' };
  var in_data = {  INDEX: "analysis", TYPE: "anomaly_pattern", gte : s[3]+'-'+mon[s[1]]+'-'+s[2]+'T'+s[4], lte : e[3]+'-'+mon[e[1]]+'-'+e[2]+'T'+e[4] }
  queryProvider.selectSingleQueryByID2("analysis", "selectByTimestamp", in_data, function(err, out_data, params) {    
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data == null) {
      console.log('null');
      rtnCode = CONSTS.getErrData('0001');
    } else if(out_data.length == 0) {
      rtnCode = CONSTS.getErrData('0001');
    } else {      
      var id = e[3]+'-'+mon[e[1]]+'-'+e[2];
      var in_data = {  INDEX: "analysis", TYPE: "anomaly" , ID: id };      
      var pattern = out_data[0]._source ;      
      queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data,  function(err, out_data, params) {                                
        var rtnCode = CONSTS.getErrData('0000');
        if (out_data == null) { 
          console.log('null');          
         rtnCode = CONSTS.getErrData('0001');        
        } else if(out_data.length == 0) {
           rtnCode = CONSTS.getErrData('0001');
        } else {
          var clust = out_data[0]._source.pattern_data;;
          console.log(pattern.timestamp)
          var t = pattern.timestamp.split('T');
          var tt = t[0].split('-');          
          var ttt = t[1].split(':');    
          var point = new Date(tt[0], parseInt(tt[1])-1, tt[2], ttt[0], ttt[1], ttt[2]).getTime();                                   
          var start = point - 110*60*1000;
          var s = new Date(start-0.5*60*1000).toString().split(' ');                
          var in_data = {
          START_TIMESTAMP: s[3]+'-'+mon[s[1]]+'-'+s[2]+'T'+s[4],
          END_TIMESTAMP:  e[3]+'-'+mon[e[1]]+'-'+e[2]+'T'+e[4],
          NODE: ["0002.00000039"]       };
         queryProvider.selectSingleQueryByID2("analysis", "selectClusterNodePower", in_data, function(err, out_data, params) {
            var rtnCode = CONSTS.getErrData('0000');
            if (out_data == null) {
              rtnCode = CONSTS.getErrData('0001');
            } else if(out_data.length == 0) {
              rtnCode = CONSTS.getErrData('0001');
            } else {
            console.log('analysis/restapi/getClusterNodePower -> length : %s', out_data.length);
              var voltage = ({ center : clust.voltage.center[pattern.voltage], min : clust.voltage.min_value[pattern.voltage], max : clust.voltage.max_value[pattern.voltage], lower : clust.voltage.lower[pattern.voltage], upper : clust.voltage.upper[pattern.voltage]});
              var ampere = ({ center : clust.ampere.center[pattern.ampere], min : clust.ampere.min_value[pattern.ampere], max : clust.ampere.max_value[pattern.ampere], lower : clust.ampere.lower[pattern.ampere], upper : clust.ampere.upper[pattern.ampere]});
              var power_factor = ({ center : clust.power_factor.center[pattern.power_factor], min : clust.power_factor.min_value[pattern.power_factor], max : clust.power_factor.max_value[pattern.power_factor], lower : clust.power_factor.lower[pattern.power_factor], upper : clust.power_factor.upper[pattern.power_factor]});
              var active_power = ({ center : clust.active_power.center[pattern.active_power], min : clust.active_power.min_value[pattern.active_power], max : clust.active_power.max_value[pattern.active_power], lower : clust.active_power.lower[pattern.active_power], upper : clust.active_power.upper[pattern.active_power]});
              var vdata = [], adata = [], pfdata = [], apdata = [];
                vdata.push({date : start, center : voltage.center[0], min : voltage.min[0], max : voltage.max[0], lower :  voltage.lower[0], upper : voltage.upper[0] });
                adata.push({date : start, center : ampere.center[0], min : ampere.min[0], max : ampere.max[0], lower : ampere.lower[0], upper : ampere.upper[0]});
                apdata.push({date : start, center : active_power.center[0], min : active_power.min[0], max : active_power.max[0], lower : active_power.lower[0], upper : active_power.upper[0] });
                pfdata.push({date : start, center : power_factor.center[0], min : power_factor.min[0], max : power_factor.max[0], lower : power_factor.lower[0], upper : power_factor.upper[0]});
              for(i=0; i<voltage.center.length; i++){
                vdata.push({date : start+(i+1)*60*1000, center : voltage.center[i], min : voltage.min[i], max : voltage.max[i], lower :  voltage.lower[i], upper : voltage.upper[i] });
                adata.push({date : start+(i+1)*60*1000, center : ampere.center[i], min : ampere.min[i], max : ampere.max[i], lower : ampere.lower[i], upper : ampere.upper[i]});
                apdata.push({date : start+(i+1)*60*1000, center : active_power.center[i], min : active_power.min[i], max : active_power.max[i], lower : active_power.lower[i], upper : active_power.upper[i] });
                pfdata.push({date : start+(i+1)*60*1000, center : power_factor.center[i], min : power_factor.min[i], max : power_factor.max[i], lower : power_factor.lower[i], upper : power_factor.upper[i]});
              } 
              var anomaly = { vdata : vdata, adata : adata, apdata : apdata, pfdata : pfdata };
              var data = []; 
              out_data.forEach(function(d){      
                data.push(d._source);
              });   
              res.json({rtnCode: rtnCode, anomaly : anomaly, raw : data, point : point});
            }
          });
        }         
        console.log('analysis/restapi/getAnomaly -> length : %s', out_data.length);
        res.json({rtnCode: rtnCode});
      });
    }
    console.log('analysis/restapi/getAnomalyPattern -> length : %s', out_data.length);
    res.json({rtnCode: rtnCode});
  });
});

router.get('/restapi/getAnomalyPatternCheck/:id', function(req, res, next) {  
  var in_data = {  INDEX: "analysis", TYPE: "anomaly_pattern" , ID: req.params.id}
  queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {    
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data == null) {
      rtnCode = CONSTS.getErrData('0001');
    } 
    res.json({rtnCode: rtnCode, rtnData : out_data});  
  });
});

// query RawData
router.get('/restapi/getClusterNodePower', function(req, res, next) { 
  console.log(req.query)
  var mon = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr' : '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12' };  
  var start = new Date(req.query.startDate).getTime();  
  var end = new Date(req.query.endDate).getTime();  
  var index = [], cnt = 0;
  for(i = start; i<=end; i=i+24*60*60*1000){
    var d = new Date(i).toString().split(' ');    
    index[cnt++]  = "corecode-"+d[3]+'-'+mon[d[1]]+'-'+d[2];
  }
  console.log(index);
  var in_data = {
      index : index, type : "corecode",
      START_TIMESTAMP: req.query.startDate,
      END_TIMESTAMP: req.query.endDate,
    };
  queryProvider.selectSingleQueryByID2("analysis", "selectClusterNodePower", in_data, function(err, out_data, params) {
    // console.log(out_data);
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data == null) {
      rtnCode = CONSTS.getErrData('0001');
    }
    console.log('analysis/restapi/getClusterNodePower -> length : %s', out_data.length);
    var data = [];    
    out_data.forEach(function(d){                 
      data.push(d._source);
    });    
    res.json({rtnCode: rtnCode, rtnData: data});
  });
});

router.post('/restapi/insertClusterMaster/:id', function(req, res, next) {  
  console.log('/analysis/restapi/insertClusterMaster');    
  console.log(JSON.stringify(req.body));
   var id = req.params.id;
   var in_data = {    INDEX: "cluster", TYPE: "master", ID: id   };  
   queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {        
    if (out_data[0] != null){
      var rtnCode = CONSTS.getErrData('E005');
      console.log(rtnCode);
      res.json({rtnCode: rtnCode});
    }  else  {
      var in_data = {    INDEX: "cluster", TYPE: "master", ID: id,   BODY : JSON.stringify(req.body)   };  
     queryProvider.insertQueryByID("analysis", "insertById", in_data, function(err, out_data) {        
          console.log(out_data);
          if(out_data.result == "created"){
            console.log(out_data);  

            var rtnCode = CONSTS.getErrData("D001");                   
          }
        if (err) { console.log(err) };                     
        res.json({rtnCode: rtnCode});    
      });
    }
  });
});

router.post('/restapi/insertClusterDetail/:id', function(req, res, next) {  
  console.log('/analysis/restapi/insertClusterDetail');    
  console.log(JSON.stringify(req.body));
   var id = req.params.id;
   var in_data = {    INDEX: "cluster", TYPE: "master", ID: id   };  
   queryProvider.selectSingleQueryByID2("analysis", "selectById", in_data, function(err, out_data, params) {        
    if (out_data[0] != null){
      var rtnCode = CONSTS.getErrData('E005');
      console.log(rtnCode);
      res.json({rtnCode: rtnCode});
    }  else  {
      var in_data = {    INDEX: "cluster", TYPE: "master", ID: id,   BODY : JSON.stringify(req.body)   };  
     queryProvider.insertQueryByID("analysis", "insertById", in_data, function(err, out_data) {        
          console.log(out_data);
          if(out_data.result == "created"){
            console.log(out_data);  
            var rtnCode = CONSTS.getErrData("D001");                   
          }
        if (err) { console.log(err) };                     
        res.json({rtnCode: rtnCode});    
      });
    }
  });
});

// run analysis
router.post('/restapi/runAnalysis', function(req, res, next) {
  console.log(req.query);
  var in_data = {"start_date": req.body.startDate,
                "end_date": req.body.endDate,
                "time_interval": parseInt(req.body.interval)};
  in_data = JSON.stringify(in_data, null, 4);
  console.log(in_data);
  // FIX-ME Socket Connection Close 처리 로직 보완 필요함.
  getConnectionToDA("DataAnalysis", function(socket) {
    writeDataToDA(socket, in_data, function() {
      var rtnCode = CONSTS.getErrData('0000');
      res.json({rtnCode: rtnCode, rtnData: ''});
    });
  });
});

// query RawData
router.get('/restapi/getDaClusterDetail', function(req, res, next) {  
  var in_data = {
      index : "cluster",    type : "detail",
      DADATE : "2017-08-28" };
//      DADATE : req.query.daDate };
  queryProvider.selectSingleQueryByID2("analysis", "selectDaClusterDetail", in_data, function(err, out_data, params) {    
    console.log(err);
    console.log(out_data);    
    if (out_data === null) {
      var rtnCode = CONSTS.getErrData('0001');
      res.json({rtnCode: rtnCode, rtnData: out_data[0]});
    } else {
      var rtnCode = CONSTS.getErrData('0000');
      console.log('analysis/restapi/getDaClusterDetail -> length : %s', out_data.length);      
    }   
    res.json({rtnCode: rtnCode});
  });
});

router.get('/restapi/getDaClusterMasterByDadate', function(req, res, next) {
  console.log(req.query);
  var in_data = {
      index : "cluster",    type : "master",
      DADATE: req.query.daDate };
  queryProvider.selectSingleQueryByID2("analysis", "selectDaClusterMasterByDadate", in_data, function(err, out_data, params) {
    // console.log(out_data);
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data[0] === null) {
      rtnCode = CONSTS.getErrData('0001');
    }
    console.log('analysis/restapi/getDaClusterMaster -> length : %s', out_data[0].length);
    res.json({rtnCode: rtnCode, rtnData: out_data[0]});
  });
});


router.get('/restapi/getDaClusterMaster', function(req, res, next) {
  console.log(req.query);
  console.log(req.query.interval);
  var in_data = {
      index : "cluster", type : "master",
      START_TIMESTAMP: req.query.startDate + ' 00:00:00',
      END_TIMESTAMP: req.query.endDate + ' 23:59:59',
      INTERVAL: parseInt(req.query.interval),
      FLAG : 'N'};
  if(req.query.interval === 'all')  {
    var sql = "selectDaClusterMasterAll";
  } else {
    var sql = "selectDaClusterMaster";
  }
  queryProvider.selectSingleQueryByID2("analysis", sql, in_data, function(err, out_data, params) {
    // console.log(out_data);
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data[0] === null) {
      rtnCode = CONSTS.getErrData('0001');
    }
    console.log('analysis/restapi/getDaClusterMaster -> length : %s', out_data[0].length);
    res.json({rtnCode: rtnCode, rtnData: out_data[0]});
  });
});

// query RawData
router.get('/restapi/getClusterRawData', function(req, res, next) {
  console.log(req.query);
  var mon = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr' : '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12' };
  var start = new Date(req.query.startDate).getTime();  
  var end = new Date(req.query.endDate).getTime();
  var index = [], cnt = 0;
  for(i = start; i<=end; i+24*60*60*1000){
    var d = new Date(i).toString().split(' ');
    index[cnt++]  = "corecode-"+ d[3]+'-'+mon[d[1]]+'-'+d[2];
  }
  var in_data = {
      index :  index, type : "corecode",
      START_TIMESTAMP: req.query.startDate + ' 00:00:00',
      END_TIMESTAMP: req.query.endDate + ' 23:59:59',
      NODE: req.query.node,
      FLAG : 'N'};
  queryProvider.selectSingleQueryByID2("analysis", "selectClusterRawData", in_data, function(err, out_data, params) {
    // console.log(out_data);
    var rtnCode = CONSTS.getErrData('0000');
    if (out_data[0] === null) {
      rtnCode = CONSTS.getErrData('0001');
    }
    console.log('analysis/restapi/getClusterRawData -> length : %s', out_data[0].length);
    res.json({rtnCode: rtnCode, rtnData: out_data[0]});
  });
});


function getConnectionToDA(connName, callback){
  var pUrl = global.config.analysis.host;
  var pPort = global.config.analysis.port;
  // var pUrl = 'm2u-da.eastus.cloudapp.azure.com';
  // var pUrl = 'localhost';
  var client = net.connect({port: pPort, host:pUrl}, function() {
    console.log(connName + ' Connected: ');
    console.log('   local = %s:%s', this.localAddress, this.localPort);
    console.log('   remote = %s:%s', this.remoteAddress, this.remotePort);
    this.setTimeout(500);
    this.setEncoding('utf8');
    this.on('data', function(data) {
      console.log(connName + " From Server: " + data.toString());
      this.end();
    });
    this.on('end', function() {
      console.log(connName + ' Client disconnected');
    });
    this.on('error', function(err) {
      console.log('Socket Error: ', JSON.stringify(err));
    });
    this.on('timeout', function() {
      console.log('Socket Timed Out');
    });
    this.on('close', function() {
      console.log('Socket Closed');
    });
    callback(client);
  });
  // return client;
}

function writeDataToDA(socket, data, callback){
  var success = !socket.write(data);
  console.log('success : ' + success);
  if (!success){
    (function(socket, data){
      socket.once('drain', function(){
        console.log('drain');
        writeData(socket, data, callback);
      });
    })(socket, data);
  }

  if (success) {
    callback();
  }
}



module.exports = router;