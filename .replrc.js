'use strict';

const geminiTools = require('./');

module.exports = {
  context: {
    geminiTools,
    gemini: geminiTools.createGeminiAPIFromEnv(true),
    geminiLive: geminiTools.createGeminiAPIFromEnv(false),
    sort: require('./lib/sort')
  }
};
