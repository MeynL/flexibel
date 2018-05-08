!function(win,doc){
  var elm = doc.documentElement;
  var docWidth = 750;  // 设计图宽度
  var maxClient = 800; // 最大放大宽度
  var minClient = 320; // 最小缩小宽度
  var setFontSize = function(){
    var clientWidth = doc.clientWidth;

    maxClient = Math.min(clientWidth,maxClient);  // 超过最大时不再放大
    maxClient = Math.max(clientWidth,minClient);  // 小过最小时不再缩小

    elm.style.fontSize = (clientWidth*100)/docWidth + 'px';
  }
    doc.addEventListener('DOMContentLoaded', setFontSize);
    win.addEventListener('orientationchange' in win ? 'orientationchange' : 'resize', setFontSize);
}(window,document)
