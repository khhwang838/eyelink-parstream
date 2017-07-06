function getData() {
  var mon = {'Jan' : '01', 'Feb' : '02', 'Mar' : '03', 'Apr' : '04', 'May' : '05', 'Jun' : '06', 'Jul' : '07', 'Aug' : '08', 'Sep' : '09', 'Oct' : '10', 'Nov' : '11', 'Dec' : '12' };    
  var sdate = $('#sdate').val();  
  var sindex =new Date(new Date(sdate).getTime()-24*60*60*1000);
  var edate = $('#edate').val();
  console.log(sdate, edate);
  var index = [], cnt = 0;
  for(i=sindex.getTime(); i <= new Date(edate).getTime(); i+=24*60*60*1000){    
    var day = new Date(i).toString().split(' ');    
    index[cnt++] = "metricbeat-"+day[3]+'.'+mon[day[1]]+'.'+day[2];    
  }  
  var s = sindex.toString().split(' ');
  var gte = s[3]+'-'+mon[s[1]]+'-'+s[2]+'T15:00:00.000Z';
  var e = edate.split('.');
  var lte = e[0]+'-'+e[1]+'-'+e[2]+'T15:00:00.000Z';
  console.log(index, gte, lte);
  $.ajax({
    url: "/reports/restapi/getProcess" ,
    dataType: "json",
    type: "get",
    data: { index : index, gte : gte , lte : lte},
    success: function(result) {
      // console.log(result);
      if (result.rtnCode.code == "0000") {        
        drawChart(result.rtnData, sdate, edate);
      } else {
        //- $("#errormsg").html(result.message);
      }
    },
    error: function(req, status, err) {
      //- alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
      $("#errormsg").html("code:"+status+"\n"+"message:"+req.responseText+"\n"+"error:"+err);
    }
  });
}

function drawChart(rtnData, sdate, edate) {  
  var minDate = new Date(sdate+' 00:00:00');
  var maxDate = new Date(edate+' 24:00:00');
  
  var cpuChart = dc.compositeChart("#cpuChart");
  var memoryChart = dc.compositeChart("#memoryChart");
  var filesystemChart = dc.compositeChart("#filesystemChart");
  var processTable = dc.dataTable(".processTable");

  console.log(rtnData);
  var data = [];
  var  filesystem = 0;  
  rtnData.forEach(function(d){          
    if(d._source.metricset.name == "process")  {
    cpu = d._source.system.process.cpu.total.pct * 100;    
    memory = d._source.system.process.memory.rss.pct * 100;
    var date = new Date(d._source.timestamp)
    data.push({ timestamp : date, hour : d3.time.hour(date), cpu : cpu, memory : memory, filesystem : filesystem, guide9 : 90, guide7 : 70, pgid : d._source.system.process.pgid, name : d._source.system.process.name });
    } else if(d._source.metricset.name == "filesystem") {
      filesystem = d._source.system.filesystem.used.pct * 100;
    }        
  });
  console.log(data);

  var nyx = crossfilter(data);
  var all = nyx.groupAll();

  var timeDim = nyx.dimension(function(d) {    
    return d.timestamp; });

  var cpuGroup = timeDim.group().reduce(
    function(p, v){      
      p.cnt++;
      p.sum += v.cpu;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));      
      return p;
    }, 
    function(p, v) {
      p.cnt--
      p.sum -= p.cpu;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));
      return p;
    },
    function(){
      return { cnt : 0, sum : 0, avg : 0}
    }
  );

  var memoryGroup = timeDim.group().reduce(
    function(p, v){      
      p.cnt++;
      p.sum += v.memory;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));      
      return p;
    }, 
    function(p, v) {
      p.cnt--
      p.sum -= p.memory;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));
      return p;
    },
    function(){
      return { cnt : 0, sum : 0, avg : 0}
    }
  );

  var filesystemGroup = timeDim.group().reduce(
    function(p, v){      
      p.cnt++;
      p.sum += v.filesystem;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));      
      return p;
    }, 
    function(p, v) {
      p.cnt--
      p.sum -= p.filesystem;
      p.avg =parseFloat((p.sum/p.cnt).toFixed(3));
      return p;
    },
    function(){
      return { cnt : 0, sum : 0, avg : 0}
    }
  );

  var guide9Group = timeDim.group().reduce(
    function(p, v){     
      p.avg = v.guide9;
      return p;
    }, 
    function(p, v) {    
      p.avg = v.guide9;
      return p;
    },
    function(){
      return {avg : 0}
    }
  );

 var guide7Group = timeDim.group().reduce(
    function(p, v){     
      p.avg = v.guide7;
      return p;
    }, 
    function(p, v) {    
      p.avg = v.guide7;
      return p;
    },
    function(){
      return {avg : 0}
    }
  );

console.log(minDate, maxDate);
  cpuChart
    .width(window.innerWidth*0.28)
    .height(380)
     .margins({top: 20, right: 20, bottom: 40, left: 110})
    .dimension(timeDim)
    .transitionDuration(500)          
//    .brushOn(true)
    .mouseZoomable(true)
    .x(d3.time.scale().domain([minDate, maxDate]))    
    .y(d3.scale.linear().domain([0, 100]))
    .round(d3.time.hour.round)
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true) 
    .title(function(d) {
      console.log(d);
      return "\npct : " + d.value.avg;
    })
    .legend(dc.legend().x(20).y(10).itemHeight(13).gap(5))
    .compose([
        dc.lineChart(cpuChart).group(cpuGroup, "cpu")
          .valueAccessor(function(d){ 
           return d.value.avg; })          
          .colors("green"),
        dc.lineChart(cpuChart).group(guide9Group, "guide")
          .valueAccessor(function(d){
           return d.value.avg; })          
          .colors("red")
          .dashStyle([2,2])
      ]);

    memoryChart
    .width(window.innerWidth*0.28)
    .height(380)
     .margins({top: 20, right: 20, bottom: 40, left: 110})
    .dimension(timeDim)
    .transitionDuration(500)          
 //   .brushOn(true)
    .mouseZoomable(true)
    .x(d3.time.scale().domain([minDate, maxDate]))    
    .y(d3.scale.linear().domain([0, 100]))
    .round(d3.time.hour.round)
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true) 
    .title(function(d) {      
      return "\npct : " + d.value.avg;
    })
    .legend(dc.legend().x(20).y(10).itemHeight(13).gap(5))
    .compose([
        dc.lineChart(memoryChart).group(memoryGroup, "memory")
          .valueAccessor(function(d){                        
           return d.value.avg; })          
          .colors("blue"),
        dc.lineChart(memoryChart).group(guide9Group, "guide")
          .valueAccessor(function(d){            
           return d.value.avg; })          
          .colors("red")
          .dashStyle([2,2])
      ]);

    filesystemChart
    .width(window.innerWidth*0.28)
    .height(380)
     .margins({top: 20, right: 20, bottom: 40, left: 100})
    .dimension(timeDim)
    .transitionDuration(500)          
 //   .brushOn(true)
    .mouseZoomable(true)
    .x(d3.time.scale().domain([minDate, maxDate]))    
    .y(d3.scale.linear().domain([0, 100]))
    .round(d3.time.hour.round)
    .renderHorizontalGridLines(true)
    .renderVerticalGridLines(true) 
    .title(function(d) {      
      return "\npct : " + d.value.avg;
    })
    .legend(dc.legend().x(20).y(10).itemHeight(13).gap(5))
    .compose([
        dc.lineChart(filesystemChart).group(filesystemGroup, "filesystem")
          .valueAccessor(function(d){                        
           return d.value.avg; })          
          .colors("#FFB2F5"),
        dc.lineChart(filesystemChart).group(guide7Group, "guide")
          .valueAccessor(function(d){            
           return d.value.avg; })          
          .colors("red")
          .dashStyle([2,2])
      ]);

  processTable 
    .dimension(timeDim)
    // Data table does not use crossfilter group but rather a closure
    // as a grouping function
    .group(function (d) {
        return d.timestamp;
    })
    // (_optional_) max number of records to be shown, `default = 25`
    .size(20)
    // There are several ways to specify the columns; see the data-table documentation.
    // This code demonstrates generating the column header automatically based on the columns.
    .columns([ 'pgid',  'cpu', 'memory', 'name', 'timestamp'   ])
    .sortBy(function (d) {
        return d.cpu;
    })
    // (_optional_) sort order, `default = d3.ascending`
    .order(d3.ascending)
    // (_optional_) custom renderlet to post-process chart using [D3](http://d3js.org)
    .on('renderlet', function (table) {
        table.selectAll('.dc-table-group').classed('info', true);
    });


 dc.renderAll();
}