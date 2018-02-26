// var page = require('webpage').create();
// page.open('http://github.com/', function() {
//   page.render('github.png');
//   phantom.exit();
// });

/*
//рабочий код
var webPage = require('webpage');
var page = webPage.create();
// page.settings.XSSAuditingEnabled = true;
// page.settings.localToRemoteUrlAccessEnabled = true;
// page.settings.loadImages = true;
// page.settings.resourceTimeout = 20000;
// page.settings.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36';

page.viewportSize = {
	width: 1080,
	height: 1080
};

// page.open('https://ru.investing.com/currencies/btc-usd', function (status) {
// page.open('http://inkotel.ru/web.php', function (status) {
page.open('https://rtsp.me/hls.php?id=j60tUEa7', function (status) {
  //var base64 = page.renderBase64('PNG');
  // page.render('github.png');
   // page.render('github.jpeg', {format: 'jpeg', quality: '100'});
    setTimeout(function() {
   page.render('github.png', {format: 'png'});

  //console.log(base64);
  phantom.exit();
}, 666);
});
*/

var page = require('webpage').create();
page.viewportSize = { width: 640, height: 480 };

// page.open('http://www.goodboydigital.com/pixijs/examples/12-2/', function () {
// page.open('https://rtsp.me/hls.php?id=j60tUEa7', function () {
page.open('https://rtsp.me/embed/j60tUEa7/', function () {
// page.open('http://www.garantia.tv/web_camera/', function () {
  setTimeout(function() { // Add a little delay before capturing the image
    page.render('dragon.png', { format: "png" });
    phantom.exit();
  }, 666);
});