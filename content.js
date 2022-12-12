chrome.storage.local.get(["FB", "FBFormat", "extensionOn"], result => {
  if (result.extensionOn != false) {

    let FBFormat = result.FBFormat;
    if (FBFormat === undefined) FBFormat = 2;

    //Фикбук
    //Автоматические скачивать при открытии страницы загрузки
    if (/https:\/\/ficbook\.net\/readfic.*download/.test(location.href)) {
      document.querySelector("#main > div.main-holder.alt > section > div > section:nth-child("+(FBFormat+1)+") > div > button").click()
      setTimeout(() => {window.close()}, 3000);
    }

    //Открывать страницу загрузки при открытии страницы фанфика
    if (/https:\/\/ficbook\.net\/readfic.*/.test(location.href) && !/download/.test(location.href) && result.FB != false) {
      window.open(location.href.replace(/(.*)(\?)(.*)/, "$1") + "/download")
    }

  }
});
