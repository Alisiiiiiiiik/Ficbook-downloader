chrome.storage.local.get(["FBFormat", "extensionOn"], result => {
  if (result.extensionOn != false) {

  let FBFormats = {1: "txt", 2: "epub", 3: "pdf", 4: "fb2"}
  let FBFormat = FBFormats[result.FBFormat];
  if (FBFormat === undefined) FBFormat = "epub";

  if (/https:\/\/ficbook\.net.*/.test(location.href)) {
      document.querySelectorAll("a.visit-link")
    .forEach((a, i) => setTimeout(() => {window.open("https://ficbook.net" + a.getAttribute("href").replace(/(.*)(\?)(.*)/, "$1") + "/download", '_blank')}, 500*i))
  }


}
});
