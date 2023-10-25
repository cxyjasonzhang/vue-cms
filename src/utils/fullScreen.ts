// 判断
function isFullScreen() {
  return {
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    false
  }
}
