const server = require('./functions')

// Modules required
const path = require('path');

// Constants
const screenshotsChrome = "./screens/chrome"
const screenshotsFirefox = "./screens/firefox"
const screenshotsResults = "./screens/resultados-comparaciones"

var fileList = server.listFiles(screenshotsChrome);
for (i = 0; i < fileList.length; i++){
	console.log("================== SCREENSHOT " + (i+1) +"===============");
	imageChrome = path.join(screenshotsChrome, fileList[i]);
    imageFirefox = path.join(screenshotsFirefox, fileList[i]);
    resultPath = path.join(screenshotsResults, fileList[i]);
	var result = server.compareImages(imageChrome, imageFirefox, resultPath);
	console.log(result);
}