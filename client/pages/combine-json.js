// pages/combine-json.js
import { useEffect } from 'react';
import { combineJSONFiles } from './combineJsonFiles';

export default function CombineJsonPage() {
  useEffect(() => {
    const inputFolder = './levels_data';
    const outputFile = './levels_data/resultado.json';

    try {
      combineJSONFiles(inputFolder, outputFile);
    } catch (error) {
      console.error('Error al combinar los archivos JSON:', error);
    }
  }, []);

  return (
    <div>
      <h1>Combine JSON Page</h1>
      <p>La combinación de archivos JSON se ha realizado. Verifica la consola del servidor para más detalles.</p>
    </div>
  );
}
