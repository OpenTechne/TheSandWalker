/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    images: { unoptimized: true } , // TODO: in gh ci must be false, to alow dev mode must be true-
}

const { combineJSONFiles } = require('./combineJSONfiles'); // Ajusta la ruta según la ubicación de tus archivos

// Rutas de entrada y salida para combinar archivos JSON
const inputFolder = './public/jsons'; // Ruta al directorio con archivos JSON (ajusta según tu estructura)
const outputFile = './public/jsons/levelData.json'; // Ruta al archivo de salida combinado (ajusta según tu estructura)

// Ejecutar la combinación de JSON durante la compilación
combineJSONFiles(inputFolder, outputFile);


module.exports = nextConfig
