// スタート前日を決める
var from = new Date("2020/11/1");
var to = new Date();

// 経過時間をミリ秒で取得
var ms = to.getTime() - from.getTime();
// ミリ秒を日付に変換(端数切捨て)
var days = Math.floor(ms / (1000*60*60*24));

changeMainImage(days);
// 経過日数似合わせてmainimgのsourceを変更
function changeMainImage(days) {
  document.mainimg.src = "./resources/img/sample_main_images_"+days+".png";
}

// ランダムで画像を入れ替える記述(1枚目)
let intervalId1;
let image1 = document.getElementById('first-sub-img');
// 5000ms(ミリ秒)＝5秒でランダム画像変更関数呼び出し
setInterval(changeImage1, 5000);
// ランダム画像変更関数
function changeImage1(){

  if(image1.style.opacity == ''){
    image1.style.opacity = 1;
  }

  let opacityInt = image1.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId1 = setInterval( function() {
    opacityInt = opacityInt - 10;
    image1.style.opacity = opacityInt / 100;

    if(image1.style.opacity <= 0){
      clearInterval(intervalId1);

      var min = 1 ;
      var max = 10 ;
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      image1.src = "./resources/img/sample_sub_images_"+a+".png";

      opacityInt = image1.style.opacity * 100;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId1 = setInterval( function() {
        opacityInt = opacityInt + 10;
        image1.style.opacity = opacityInt / 100;
        if(image1.style.opacity >= 1){
          clearInterval(intervalId1);
        }
      }, 100);
    }
  }, 100);
}


// ランダムで画像を入れ替える記述(2枚目)
let intervalId2;
let image2 = document.getElementById('second-sub-img');
setInterval(changeImage2, 10000);

function changeImage2(){

  if(image2.style.opacity == ''){
    image2.style.opacity = 1;
  }

  let opacityInt = image2.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId2 = setInterval( function() {
    opacityInt = opacityInt - 10;
    image2.style.opacity = opacityInt / 100;

    if(image2.style.opacity <= 0){
      clearInterval(intervalId2);
      var min = 1 ;
      var max = 10 ;
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      image2.src = "./resources/img/sample_sub_images_"+a+".png";

      opacityInt = image2.style.opacity * 100;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId2 = setInterval( function() {
        opacityInt = opacityInt + 10;
        image2.style.opacity = opacityInt / 100;
        if(image2.style.opacity >= 1){
          clearInterval(intervalId2);
        }
      }, 100);
    }
  }, 100);
}


// ランダムで画像を入れ替える記述(3枚目)
let intervalId3;
let image3 = document.getElementById('third-sub-img');
setInterval(changeImage3, 15000);

function changeImage3(){

  if(image3.style.opacity == ''){
    image3.style.opacity = 1;
  }

  let opacityInt = image3.style.opacity * 100;
  //フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
  let intervalId3 = setInterval( function() {
    opacityInt = opacityInt - 10;
    image3.style.opacity = opacityInt / 100;

    if(image3.style.opacity <= 0){
      clearInterval(intervalId3);
      var min = 1 ;
      var max = 10 ;
      var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      image3.src = "./resources/img/sample_sub_images_"+a+".png";

      opacityInt = image3.style.opacity * 100;
      //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
      intervalId3 = setInterval( function() {
        opacityInt = opacityInt + 10;
        image3.style.opacity = opacityInt / 100;
        if(image3.style.opacity >= 1){
          clearInterval(intervalId3);
        }
      }, 100);
    }
  }, 100);
}

