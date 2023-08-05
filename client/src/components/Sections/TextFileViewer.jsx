import React, { useState, useEffect } from 'react';
import level1_code from '../../../../contracts/level1_code.cairo';

function TextFileViewer() {
  const [fileContent, setFileContent] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(level1_code) // Replace '/api/contrato.txt' with the actual endpoint for your text file
      .then((res) => res.text())
      .then((content) => {
        setFileContent(content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo de texto:', error);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!fileContent) return <p>No content in the text file</p>;

  return (
    <div>
      <pre>{fileContent}</pre>
    </div>
  );
}

export default TextFileViewer;