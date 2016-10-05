Papa.parse("data/mapdata.csv", {
	complete: function(results) {
		console.log(results);
	}
});

var map = new GMaps({
  el: '#map',
  lat: 35.6931623,
  lng: 138.587116,
  zoom: 7
});

map.addMarkers([
  {
    lat: 35.600413,
    lng: 140.097878,
    title: 'japan',
    infoWindow: {
      content: '<a href="https://retrip.jp/articles/66226/" target="_blank"><figure><img src="https://static.retrip.jp/article/66226/images/6622621280c62-5267-4878-b945-261b7615b17c_s.jpg" width="120"></figure><p>360度美しい！夜景遺産に認定された"千葉ポートタワー"が絶景すぎる</p></a>'
    }
  },{
    lat: 35.044128,
    lng: 135.787383,
    title: 'japan',
    infoWindow: {
      content: '<a href="https://retrip.jp/articles/58167/" target="_blank"><figure><img src="https://static.retrip.jp/article/58167/images/5816759ba4140-d03e-46e2-8dd1-b16380af6c3b_s.jpg" width="120"></figure><p>年間800杯食べるマニアが厳選！京都・一乗寺周辺の激ウマオススメラーメンBEST12</p></a>'
    }
  },{
    lat: 35.336588,
    lng: 139.644753,
    title: 'japan',
    infoWindow: {
      content: '<a href="https://retrip.jp/articles/66145/" target="_blank"><figure><img src="https://static.retrip.jp/article/66145/images/661451b88e7ee-0c75-4637-8f4c-4c9b1a6f03c5_s.jpg" width="120"></figure><p>【明日から】秋花火も楽しめる！「八景島シーパラダイス」で初のハロウィンイベント開催</p></a>'
    }
  },{
    lat: 35.322614,
    lng: 139.552717,
    title: 'japan',
    infoWindow: {
      content: '<a href="https://retrip.jp/articles/66174/" target="_blank"><figure><img src="https://static.retrip.jp/article/66174/images/66174c8cf22e1-1572-46c0-b636-c2d5d6fe014e_s.jpg" width="120"></figure><p>ディズニーラテアートが可愛すぎる！鎌倉にあるカフェ「雫」がSNSで話題</p></a>'
    }
  },{
    lat: 35.010219,
    lng: 135.677001,
    title: 'japan',
    infoWindow: {
      content: '<a href="https://retrip.jp/articles/66164/" target="_blank"><figure><img src="https://static.retrip.jp/article/66164/images/66164957b6297-f8bb-4e17-942e-0275fe652156_s.jpg" width="120"></figure><p>秋の星空観賞！京都・嵐山で星空の楽しみ方を集めた「宙フェス2016」開催</p></a>'
    }
  }
]);
