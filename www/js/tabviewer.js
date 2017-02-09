var currentlySelectedTab;

$(document).ready(function(){
    $("#tabSizing").toggleClass("tabDataHidden");
    $("#tabHeaderSizing").toggleClass("tabSelected");
    currentlySelectedTab = "Sizing";
});

function showTab(tabId) {
    console.log("tab selected ", tabId);
    $("#tab" + currentlySelectedTab).toggleClass("tabDataHidden");
    $("#tabHeader" + currentlySelectedTab).toggleClass("tabSelected");

    $("#tab" + tabId).toggleClass("tabDataHidden");
    $("#tabHeader" + tabId).toggleClass("tabSelected");
    currentlySelectedTab = tabId;
}