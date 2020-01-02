// var app = chrome.runtime.getBackgroundPage();
document.getElementById('executeBtn').addEventListener('click', function () {
    chrome.tabs.executeScript({
        file: 'rm_placeholders.js'
    });
});
