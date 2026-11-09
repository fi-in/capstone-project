const whitelist = [
    "google.com",
    "ncedcloud.org"
];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
if (!changeInfo.url) {return;} // if something changed that wasn't the url, no need to check again

if (!tab.url.startsWith("http")) {return;} // sites that don't start with http will be excluded

const hostName = new URL(tab.url).hostname;

const allowed = whitelist.some(function (domain) { // checks if the site is on the whitelist
    return hostName === domain || hostName.endsWith("." + domain);
});

if (!allowed) { // if the site is not allowed, close that tab
    chrome.tabs.remove(tabId);
}

});