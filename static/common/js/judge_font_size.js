/**
 * 根据移动端的屏幕宽度计算基础文字大小
 * Author:Anglesky
 * Date:2018-12-04
 * Version:1.0.0
 **/
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 16 * (width / 320) + "px");
        };
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(document, window));
