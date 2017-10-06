document.getElementById("checkPage").addEventListener("click", myFunction);

function myFunction(){
    console.log('asd');
    chrome.tabs.getSelected(null, function(tab) {
        d = document;
        console.log(chrome.extension.getBackgroundPage());

})
}
