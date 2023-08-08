const fs = require('fs');
const path = require('path');
const { combineJSONFiles } = require('./combineJSONfiles'); // Ajusta la ruta según la ubicación de tus archivos

// Rutas de entrada y salida para combinar archivos JSON
const inputFolder = './public/jsons'; // Ruta al directorio con archivos JSON (ajusta según tu estructura)
const outputFile = './public/jsons/levelData.json'; // Ruta al archivo de salida combinado (ajusta según tu estructura)

try {
  combineJSONFiles(inputFolder, outputFile);
  console.log('Operación de combinación de JSON completada.');
} catch (error) {
  console.error('Error al combinar los archivos JSON:', error);
}
