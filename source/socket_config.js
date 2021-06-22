var ws

function initSocket() {
    if (!checkSupportSocket()) {
        return
    }
    var addr = makeAddress()
    if (!addr) { return }

    if (!ws) {
        console.log('不存在ws')
        ws = new WebSocket(addr);
    } else {
        console.log('ws存在')
        console.log('ws.readyState = ', ws.readyState)
        switch (ws.readyState) {
            case 0:
            case 3:
                break; // 0 - 表示连接尚未建立; 3 - 表示连接已经关闭或者连接不能打开
            case 1:
            case 2:
                return; // 1 - 表示连接已建立，可以进行通信; 2 - 表示连接正在进行关闭
        }

    }

    var result = document.getElementById('result');

    ws.onopen = function() {
        console.log('已连接上！');
        result.innerHTML = "已链接！"
    }

    var sendbtn = document.getElementById('sendbtn');
    sendbtn.addEventListener('click', function(ev) {

        var num = makeHandlerNum()
        ws.send(num);
    });
    ws.onmessage = function(e) {
        console.log(e.data);
        result.innerHTML = e.data;
    }
    ws.onclose = function() {
        console.log('连接已关闭！');
        result.innerHTML = "链接断开！"
    }
}

function makeAddress() {
    var ipStr = document.getElementById('m').value;
    var addr = ""
    if (!ipStr) {
        alert('请输入ip')
        return false
    }
    addr = "ws://" + ipStr + ":8088"
    return addr
}

function makeHandlerNum() {
    var handlerNum = document.getElementById('handler').value;
    var realNum = "1"
    if (handlerNum == "1") {
        realNum = "1"
    } else if (handlerNum == "2") {
        realNum = "2"
    }

    return realNum

}

function checkSupportSocket() {
    if ("WebSocket" in window) {
        console.log('支持socket')
        return true
    } else {
        console.log('不支持socket')
        alert('不支持socket')
        return false
    }
}