import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function FileReader({ id }) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch(`/level${id}_code.cairo`)
      .then((response) => response.text())
      .then((data) => setFileContent(data))
      .catch((error) => console.error('Error al leer el archivo:', error));
  }, []);

  return (
    <div>
      <SyntaxHighlighter language="rust" className=" text-left text-xs" style={agate}>
        {fileContent}
      </SyntaxHighlighter>
    </div>
  );
}

export default FileReader;
