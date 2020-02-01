console.log("background running");

chrome.browserAction.onClicked.addListener(clicked);

function clicked(tab)
{
    let msg={
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id,msg);
    console.log("cliccked!");
}