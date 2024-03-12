import fs from "fs";
const builtFilePath = './dist/index.html'
const htmlData = fs.readFileSync(builtFilePath, 'utf8').toString()
const processedScript = htmlData.replace(/\/assets/g, './assets')
fs.writeFileSync(builtFilePath, processedScript)