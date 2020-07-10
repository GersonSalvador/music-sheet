import React from 'react';
import { Editor } from 'react-abc';
import './App.css';

function App() {

  const notation = 'CDEF GABc|';

  const id = 'a-random-id';

  return (
    <div>yarn 
    <textarea
      defaultValue={notation}
      id={id}
    />
    <Editor
      editArea={id}
    />
  </div>
  );
}

export default App;
