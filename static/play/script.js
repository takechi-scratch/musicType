let startD
let typingStr
let typingNumber
console.log("コンソールへようこそ！")

function main(){  
    startD = Date.now();
    typingStr = "Hello,World!";
    typingNumber = 0;

    const interval = setInterval(function() {
        document.querySelector(".time").innerText = Math.round((Date.now() - startD) / 10) / 100;
        document.querySelector(".finishedStr").innerText = typingStr.substring(0, typingNumber);
        document.querySelector(".yetStr").innerText = typingStr.substring(typingNumber, typingStr.length);
        if (typingNumber == typingStr.length) {
            clearInterval(interval)
            const sound = new Audio("/static/sound/next.mp3");
            sound.play();
        }
    }, 50);
}

document.addEventListener("keydown", (event) => {
    if (event.key == "Tab") {
        alert("Tabが押されたよー");
        return
    }

    if (event.key.length == 1) {
        if (event.key == typingStr[typingNumber]) {
            typingNumber++;
            const sound = new Audio("/static/sound/type.wav");
            sound.play();
        } else {
            const sound = new Audio("/static/sound/miss.wav");
            sound.play();
        }
    }

});
