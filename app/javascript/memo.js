const e = require("turbolinks");

function post(){ //関数定義
  const submit = document.getElementById("submit"); //id【submit】の要素を取得（index.html.erb）し、定数submitに代入
  submit.addEventListener("click", (e) => { //要素をクリックしたと同時に関数を定義。第二引数に（e）を指定。※（e）は、イベント発生時の情報を持ったオブジェクト。今回は投稿ボタンをクリックしたという情報を持ったオブジェクト
    e.preventDefault(); //規定のイベント（今回は投稿ボタンのクリック）を無効化する
    const form = document.getElementById("form") //id【form】の要素を取得（index.html.erb）し、定数formに代入
    const formData = new FormData(form); //FormDataオブジェクトでフォームの値を取得し、定数formDataに代入
    const XHR = new XMLHttpRequest(); //JavaScriptを用いてサーバーとHTTP通信を行うオブジェクトを生成
    XHR.open("POST", "/posts", true); //リクエストを初期化し、内容を指定し直す。
    XHR.responseType = "json"; //データフォーマットをJSONに指定する
    XHR.send(formData); //引数に要素を入れてリクエストを送信
  });
};

window.addEventListener('load', post); //ページが読み込まれたときにイベント発火