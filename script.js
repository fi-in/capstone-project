const whitelist = [
    "google.com",
    "*.ncedcloud.org"
];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
if (!changeInfo.url) {return;} // if something changed that wasn't the url, no need to check again

if (!tab.url.startsWith("http")) {return;} // sites that don't start with http will be excluded

const hostName = new URL(tab.url).hostname; // picks out the main part of the domain to check it

if (!whitelist.includes(hostName)) { // if the hostName is not on the whitelist, close that tab
    chrome.tabs.remove(tabId)
}

});