// JavaScriptを使ってフォームが送信された時の挙動を定義
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // デフォルトの送信動作をキャンセル

    // フォームからURLを取得
    var url = `play?v=${document.getElementById('urlInput').value}`;

    // 取得したURLにリダイレクト
    window.location.href = url;
});