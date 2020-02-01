console.log("go");

document.getElementsByTagName('body')[0].onscroll = sc1;
function sc1() {
    let par = document.getElementsByTagName('p');
    var arr = JSON.parse(localStorage.getItem("ar2"));
    for (elt of par) {
        var content = elt.innerHTML;
        if (arr != null) {
            for (let i = 0; i < arr.length; i++) {
                if (content.includes(arr[i])) {
                    console.log("scrolllllll");
                    console.log(arr[i]);
                    elt.parentElement.parentElement.parentElement
                        .parentElement.parentElement.parentElement.style.display = 'none';
                }
            }
        }
    }
}


chrome.runtime.onMessage.addListener(gotMsg);
function gotMsg(message, sender, sendResponse) {
    if (message.status == "in") {
        var ar = message.txt.split(" ");
        localStorage.setItem("ar2", JSON.stringify(ar));
        document.getElementsByTagName('body')[0].onscroll = sc2;
        function sc2() {
            var arr = JSON.parse(localStorage.getItem("ar2"));
            let par = document.getElementsByTagName('p');
            for (elt of par) {
                var content = elt.innerHTML;
                if (arr != null) {
                    for (let i = 0; i < arr.length; i++) {
                        if (content.includes(arr[i])) {
                            console.log("initialized");
                            console.log(arr[i]);
                            elt.parentElement.parentElement.parentElement
                                .parentElement.parentElement.parentElement.style.display = 'none';
                        }
                    }
                }
            }
        }
    }
    if (message == "start") {
        var arr = JSON.parse(localStorage.getItem("ar2"));
        document.getElementsByTagName('body')[0].onscroll = sc3;
        function sc3() {
            var re = new RegExp('ahmed', 'gi');
            var matches = document.documentElement.innerHTML.match(re);
            let par = document.getElementsByTagName('p');
            for (elt of par) {
                var content = elt.innerHTML;
                if (arr != null) {
                    for (let i = 0; i < arr.length; i++) {
                        if (content.includes(arr[i])) {
                            console.log("start");
                            console.log(arr[i]);
                            elt.parentElement.parentElement.parentElement
                                .parentElement.parentElement.parentElement.style.display = 'none';
                        }
                    }
                }
            }
        }
    }
    if (message == "reset") {
        var arr = JSON.parse(localStorage.getItem("ar2"));
        for (let i = 0; i < arr.length; i++)
            arr[i] = "";
        localStorage.removeItem("ar2");
        console.log("removed");
    }

    if (message.status == "setName") {
        document.getElementsByTagName('body')[0].onscroll = sc4;
        function sc4() {
            console.log("set name " + message.txt);
            let par = document.querySelectorAll("div > div > div > div > div > div > div > div >div>div >div>div> h5>span >span> a");
            let par2 = document.querySelectorAll("div > div > div > div > div > div > div > div >div>div >div>div> h5>span>span >span> a");
            let par3 = document.querySelectorAll("div > div > div > div > div > div > div > div >div>div >div>div> h6>span >span> a");
            for (elt of par) {
                
                elt.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.style.display = 'none';
                elt.style.display = "none";
            }
            for (elt of par2) {
                elt.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.style.display = 'none';
                elt.style.display = "none";
            }
            for (elt of par3) {
                elt.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.parentElement.parentElement
                    .parentElement.parentElement.style.display = 'none';
                elt.style.display = "none";
            }
        }

    }
}
