import browser from "webextension-polyfill";
import { WebExtensionBlocker } from "@cliqz/adblocker-webextension";

WebExtensionBlocker.fromPrebuiltAdsAndTracking().then((blocker) => {
  blocker.enableBlockingInBrowser(browser);
});
