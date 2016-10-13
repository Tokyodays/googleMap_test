$(function(){
  $.ajax({
    type: 'GET',
    cache: false,
    dataType: 'jsonp',
    crossDomain: true,
    jsonpCallback: 'csv2jsonp_map',
    url: "http://www.nikkei.com/edit/ns/csv2jsonp_map.js",
    success: function(data){

      var _japanmap = new GMaps({
        el: '#MAP_JAPAN',
        lat: 37.8931623,
        lng: 137.587116,
        zoom: 5
      });
      var _globalmap = new GMaps({
        el: '#MAP_GLOBAL',
        lat: 35.6931623,
        lng: 8.587116,
        zoom: 1
      });

      var _japan_array = [];
      var _global_array = [];
      for(var i = 1, ileng = data.length; i < ileng; i++){
        var _temp = data[i];
        var _title = _temp[0];
        var _url = _temp[1];
        var _thumbnail = _temp[2];
        var _credit = _temp[3];
        var _latitude = Number(_temp[4]);
        var _longitude = Number(_temp[5]);
        var _scale = _temp[6];
        var _content = "";
        _content += '<a href="' + _url + '" target="_blank"><figure><img src="' + _thumbnail + '" width="120">';
        if(_credit) {
          _content += "<figcaption>" + _credit + "</figcaption>";
        }
        _content += '</figure><p>' + _title + '</p></a>';
        var _obj = {
          "lat": _latitude,
          "lng": _longitude,
          "title": _title,
          infoWindow: {
            "content": _content
          }
        };
        if(_scale == "japan"){
          _japan_array.push(_obj);
        } else if(_scale == "world"){
          _global_array.push(_obj);
        }
      }
      _japanmap.addMarkers(_japan_array);
      _globalmap.addMarkers(_global_array);
    }
  })
});
