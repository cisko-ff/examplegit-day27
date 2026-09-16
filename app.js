const fs = require('fs');

function loadConfig() {
  const raw = fs.readFileSync('config.json', 'utf8');
  return JSON.parse(raw);
}

function run() {
  const config = loadConfig();
  console.log(`=== RUNNING PLATFORM v${config.version} (${config.environment}) ===`);
  
  if (config.featureFlags.enableNewDashboardUI) {
    console.log("[FEATURE ENABLED] 🎨 New Dashboard UI rendered.");
  } else {
    console.log("[FEATURE DISABLED] 📄 Legacy Dashboard rendered.");
  }

  if (config.featureFlags.enableBetaMFA) {
    console.log("[FEATURE ENABLED] 🔒 Multi-Factor Authentication active.");
  } else {
    console.log("[FEATURE DISABLED] 🔑 Standard Login active.");
  }

  if (config.featureFlags.enableAdvancedAnalytics) {
    console.log("[FEATURE ENABLED] 📊 Advanced Analytics active.");
  } else {
    console.log("[FEATURE DISABLED] 📉 Basic logging active.");
  }
}

run();
