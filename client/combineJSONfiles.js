const fs = require('fs');
const path = require('path');

function readJSONFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

function getJSONFilesFromFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  return files.filter(file => path.extname(file) === '.json');
}

function combineJSONFiles(inputFolder, outputFile) {
  const jsonFiles = getJSONFilesFromFolder(inputFolder);

  const combinedData = [];

  jsonFiles.forEach(file => {
    const filePath = path.join(inputFolder, file);
    const jsonData = readJSONFile(filePath);
    combinedData.push(jsonData);
  });


  fs.writeFileSync(outputFile, JSON.stringify(combinedData, null, 2), 'utf8');
  console.log('Datos combinados y ordenados en el archivo:', outputFile);
}

module.exports = {
  readJSONFile,
  getJSONFilesFromFolder,
  combineJSONFiles
};
