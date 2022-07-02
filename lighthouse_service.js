const lighthouse = require("lighthouse");
const desktopConfig = require("lighthouse/lighthouse-core/config/lr-desktop-config.js");
const mobileConfig = require("lighthouse/lighthouse-core/config/lr-mobile-config.js");
const chromeLauncher = require("chrome-launcher");
const gen_report = async (url, device) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "json",
    onlyCategories: ["performance", "seo", "accessibility"],
    port: chrome.port,
  };
  const runnerResult =
    device === "desktop"
      ? await lighthouse(url, options, desktopConfig)
      : await lighthouse(url, options, mobileConfig);
  const reportJSON = runnerResult.report;
  await chrome.kill();
  return reportJSON;
};

module.exports = gen_report;
