document.getElementById("btn1").onclick = c;
//chrome.webNavigation.onCompleted.addListener(c);
function c() {
    var s = document.getElementById("txt").value;
    if (s != "") {
        let msg = {
            txt: s,
            status: "in"
        }
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, msg);
            });
    }
    else {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "start");
            });
    }
}
function c2() {
    chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "start");
        });
}
document.getElementById("btn2").onclick = ss;
function ss() {
    chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "reset");
        });
}

document.getElementById("btn3").onclick = blockName;
function blockName() {
    var s = document.getElementById("txt2").value;
    
        let msg = {
            txt: s,
            status: "setName"
        }
    chrome.tabs.query({ currentWindow: true, active: true },
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, msg);
        });

}

 