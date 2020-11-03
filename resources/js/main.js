// スタート前日を決める
var from = new Date("2020/11/2");
var to = new Date();

// 経過時間をミリ秒で取得
var ms = to.getTime() - from.getTime();
// ミリ秒を日付に変換(端数切捨て)
var days = Math.floor(ms / (1000*60*60*24));

console.log(days); 

changeMainImage(days);

function changeMainImage(days) {
  document.mainimg.src = "./resources/img/sample_main_images_"+days+".png";
}


