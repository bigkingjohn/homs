var currentlySelectedTab;

$(document).ready(function(){
    $("#tabM").toggleClass("tabDataHidden");
    $("#tabHeaderM").toggleClass("tabSelected");
    currentlySelectedTab = "M";
});

function showTab(tabId) {
    console.log("tab selected ", tabId);
    $("#tab" + currentlySelectedTab).toggleClass("tabDataHidden");
    $("#tabHeader" + currentlySelectedTab).toggleClass("tabSelected");

    $("#tab" + tabId).toggleClass("tabDataHidden");
    $("#tabHeader" + tabId).toggleClass("tabSelected");
    currentlySelectedTab = tabId;
}