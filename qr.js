var link = "https://YOUR_GITHUB_USERNAME.github.io/project/gift/index.html";

new QRCode(document.getElementById("qrcode"), {
    text: link,
    width: 220,
    height: 220,
    colorDark : "#ff2f77",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
