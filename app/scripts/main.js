

var csvjson={};
(function(){function k(e){return"undefined"==typeof e?!1:!0}function m(e,d){for(var c=e.split(d=d||","),a=c.length-1,b;0<=a;a--)'"'==c[a].replace(/"\s+$/,'"').charAt(c[a].length-1)?1<(b=c[a].replace(/^\s+"/,'"')).length&&'"'==b.charAt(0)?c[a]=c[a].replace(/^\s*"|"\s*$/g,"").replace(/""/g,'"'):a?c.splice(a-1,2,[c[a-1],c[a]].join(d)):c=c.shift().split(d).concat(c):c[a].replace(/""/g,'"');return c}csvjson.csv2json=function(e,d){var d=d||{},c=k(d.delim)?d.delim:",",a=e.split("\n"),b=m(a[0],c),a=a.slice(1,
a.length),f={};f.headers=b;f.rows=[];for(var h in a){var g=a[h],i=m(g,c);if(0==g.length)break;var g={},l;for(l in i){var j=i[l];isNaN(1*j)||(j*=1);g[b[l]]=j}f.rows.push(g)}return f};csvjson.json2csv=function(e,d){var d=d||{},c=k(d.delim)?d.delim:",",a=k(d.textdelim)?d.textdelim:"";if("string"==typeof e)return null;var b="",f;for(f in e.headers)var h=e.headers[f],b=b+(a+h+a+c);var b=b.slice(0,b.length-1),b=b+"\n",g;for(g in e.rows){var i=e.rows[g];for(f in e.headers)h=e.headers[f],b="string"==typeof i[h]?
b+(a+i[h]+a+c):b+(i[h]+c);b=b.slice(0,b.length-1);b+="\n"}return b=b.slice(0,b.length-1)}})();

$(function(){
  $.ajax({
    url: "data/mapdata.csv",
    success: function(data){

      var map = new GMaps({
        el: '#map',
        lat: 35.6931623,
        lng: 138.587116,
        zoom: 1
      });

      var _result = csvjson.csv2json(data, {
    		delim: ","
    	});
      var _array = [];
      for(var i = 0, ileng = _result.rows.length; i < ileng; i++){
        var _temp = _result.rows[i];
        var _content = "";
        _content += '<a href="' + _temp.url + '" target="_blank"><figure><img src="' + _temp.thumbnail + '" width="120">';
        if(_temp.credit) {
          _content += "<figcaption>" + _temp.credit + "</figcaption>";
        }
        _content += '</figure><p>' + _temp.title + '</p></a>';
        _array.push({
          "lat": Number(_temp["latitude"]),
          "lng": Number(_temp["longitude"]),
          "title": "japan",
          infoWindow: {
            "content": _content
          }
        })
      }
      map.addMarkers(_array);
    }
  })
});
