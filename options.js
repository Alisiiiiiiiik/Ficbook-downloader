document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.local.get(["FB", "FBFormat"], result => {

    if (result.FB == true) {
      document.getElementById("FB").checked = true;
    } else {
      document.getElementById("FB").checked = false;
    }

    if (result.FBFormat != undefined) {
      document.querySelector("#FB-format > label:nth-child(" + result.FBFormat + ") > input[type=radio]").checked = true;
    }
  })


  document.getElementById("FB").onchange = () => {
    chrome.storage.local.set({
      "FB": document.getElementById("FB").checked})
  }



  document.getElementById("FB-format").onclick = () => {
    chrome.storage.local.set({
      "FBFormat": document.getElementById("FB-format").elements['FB-format'].value})
  }

})
