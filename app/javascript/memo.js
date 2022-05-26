const buildHTML = (XHR) => { //関数buildHTMLを生成し、引数に変数XHRを入れる
const item = XHR.response.post; //postsコントローラーで定義した変数postの中身を、定数itemに代入
const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
  return html; //関数XHRの戻り値に、定数html（3〜11行目）を指定
};

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
    XHR.onload = () => { //リクエストの送信に成功したときに、下記の処理を実施
      if (XHR.status != 200){ //返り値が200番台以外だった場合
        alert(`Error ${XHR.status}: ${XHR.statusText}`);//エラーメッセージの表示
        return null; //JavaScriptから抜け出す
      }
      const list = document.getElementById("list"); //id"list"の要素を取得し、定数listに代入
      const formText = document.getElementById("content"); //id"content"の要素を取得し、定数formTextに代入
      list.insertAdjacentHTML("afterend", buildHTML(XHR)); //定数listに格納された要素の直後に、関数buildHTML(XHR)で生成したhtmlを挿入
      formText.value = ""; //formTextのvalue属性に空の文字列を指定し、フォームの中身をリセット
    };
  });
};

window.addEventListener('load', post); //ページが読み込まれたときにイベント発火