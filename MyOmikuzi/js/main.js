'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
//ランダムに行う場合
    //const results = ['大吉' ,'中吉','凶','末吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
// 確率を使う場合
    const n =Math.random();
    if(n < 0.05) { // 5%
      btn.textContent = '大吉';
    }else if (n < 0.2) { // 15%
      btn.textContent = '中吉';
    }else {  // 80%
      btn.textContent = '凶';
    }

//switch文を使う場合
    //btn.textContent = n;
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}