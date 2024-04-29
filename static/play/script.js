let startD
let typingStr
let typingNumber
let miss
console.log("コンソールへようこそ！");
document.querySelector(".prepare").innerText = "準備中…";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// const fs = require('fs');    // モジュールの読み込み

// const json = fs.readFileSync(<ファイルパス>, <encoding>)
// const data = JSON.parse(json)

// まとめて書く
// const data = JSON.parse(fs.readFileSync(<ファイルパス>, <encoding>))

// youtube IFrame Player API の下準備
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// IFrame の生成
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "360",
        width: "640",
        videoId: params.get("v"),
        events: {
            "onReady": onPlayerReady,
            "onStateChange": onPlayerStateChange
        },
        playerVars: {"controls": 0, "disablekb": 1}
    });
}

function onPlayerReady(event) {
    document.querySelector(".prepare").innerText = "スペースキーまたは動画クリックでスタートします。"; // Playerの準備ができたとき
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING){
        main();
    }
}

function main(){
    startD = Date.now();
    typingStr = "reta-pakkudegenkinokurehasubetesagidesu";
    typingNumber = 0;
    miss = 0;

    document.querySelector(".prepare").remove();

    const interval = setInterval(function() {
        document.querySelector(".time").innerText = Math.round(player.getCurrentTime() * 100) / 100;
        document.querySelector(".finishedStr").innerText = typingStr.substring(0, typingNumber);
        document.querySelector(".yetStr").innerText = typingStr.substring(typingNumber, typingStr.length);

        document.querySelector(".corrects").innerText = typingNumber;
        document.querySelector(".miss").innerText = miss;

        if (typingNumber == typingStr.length) {
            clearInterval(interval)
            const sound = new Audio("/static/sound/next.mp3");
            sound.play();
        }
    }, 50);
}

document.addEventListener("keydown", (event) => {
    if (event.key == " ") {
        if (player.getPlayerState() != 1){
            player.playVideo();
            main();
        } else {
            player.pauseVideo()
        }
        return
    }

    if (event.key.length == 1 & player.getPlayerState() == 1) {
        if (event.key == typingStr[typingNumber]) {
            typingNumber++; // インクリメント
            const sound = new Audio("/static/sound/type.wav");
            sound.play();
        } else {
            miss++;
            const sound = new Audio("/static/sound/miss.wav");
            sound.play();
        }
    }

});
