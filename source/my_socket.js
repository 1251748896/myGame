function linkSocket() {
    if ("WebSocket" in window) {
        alert('准备链接socket')
    } else {
        alert('您的浏览器不支持 WebSocket！');
    }
}