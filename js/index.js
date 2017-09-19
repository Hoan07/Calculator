function addIconSearch() {
  return '<button class="btn btn-link" onclick="iconSearchClick()"><i class="fa fa-search" style="font-size:20px;"></i></button>';
}
function addSearchInput() {
  return '<div style="margin:auto 20% auto 20%" class="input-group"><input id="searchBox" type="text" class="form-control" placeholder="Search for ..."><span class="input-group-btn"><button class="btn btn-light" onclick="iconClearClick()"><i class="fa fa-remove"></i></button><button class="btn btn-light" onclick="iconSearchResult()"><i class="fa fa-search"></i></button></span></div>';
}
function getRandomTopic() {
  var library=["love","football","Bill Gates"];
  var num = Math.floor(Math.random()*library.length);
  return library[num];
}

$("#searchDiv").append(addIconSearch());
function iconClearClick() {
  $("#searchDiv").empty();
  $("#searchDiv").append(addIconSearch());
  $("#searchSpace").empty();
  $("#parent").removeClass("div11").addClass("div1");
}
function iconSearchClick() {
  $("#searchDiv").empty();
  $("#searchDiv").append(addSearchInput());
}
function htmlResult(val) {
  var result='';
  for (var i=0;i<val.length;++i) {
    result += '<a href=https://en.wikipedia.org/?curid='+val[i][2]+'><span style="display: block;"><div class="row divtag"><div style="margin:auto 10px auto 20px" class="row text-left"><p><b>'+val[i][0]+'</b></p></div><div style="margin:auto 10px auto 20px" class="row text-left"><p>'+val[i][1]+'</p></div></div></span></a>';    
  }
  return result;
}
function showSearchResult(topic) {
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+topic+"&srlimit=20&format=json"+"&callback=?", function(json) {
    $("#searchSpace").empty();
    var result=[];
    for(var i=0;i<json.query.search.length;++i) {
     result.push([json.query.search[i].title,json.query.search[i].snippet,json.query.search[i].pageid]);
    }
    
    $("#searchSpace").append(htmlResult(result));
  }); //end getJSON
}

function randomSearch() {
  showSearchResult(getRandomTopic());
  $("#parent").removeClass("div1").addClass("div11");
}

function iconSearchResult() {
  $("#parent").removeClass("div1").addClass("div11");
  showSearchResult($('#searchBox').val());  
}