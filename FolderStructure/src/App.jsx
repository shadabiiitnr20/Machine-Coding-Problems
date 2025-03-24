import { useState } from 'react';
import './App.css';

const App = ({ data }) => {
  const [explorer, setExplorer] = useState(data);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to add a folder
  const addFolderLogic = (filename) => {
    const name = prompt('Enter folder name:');
    if (!name) return;

    const updateExplorer = (node) => {
      if (node.filename === filename && node.isFolder) {
        return {
          ...node,
          children: [
            ...node.children,
            { filename: name, isFolder: true, children: [] },
          ],
        };
      }
      return {
        ...node,
        children: node.children?.map(updateExplorer) || [],
      };
    };

    setExplorer((prev) => updateExplorer(prev));
  };

  const deleteLogic = (filename) => {
    const updateExplorer = (node) => {
      if (node.filename === filename) {
        return null; // Delete the node completely
      }

      return {
        ...node,
        children:
          node.children
            ?.map(updateExplorer) // Recursively check children
            .filter((child) => child !== null) || [], // Remove null values (deleted nodes)
      };
    };

    setExplorer((prev) => updateExplorer(prev));
  };

  return (
    explorer &&
    (explorer.isFolder ? (
      <>
        <span className='folder-container' onClick={handleOpen}>
          📁 {explorer.filename}
        </span>
        <button
          onClick={() => addFolderLogic(explorer.filename)}
          className='add-folder'
        >
          ➕
        </button>
        {!(explorer.filename === 'root') && (
          <button
            onClick={() => deleteLogic(explorer.filename)}
            className='delete-btn'
          >
            🗑️
          </button>
        )}
        <br />
        {open && (
          <div className='child-container'>
            {explorer.children?.map((item, index) => (
              <App key={index} data={item} />
            ))}
          </div>
        )}
      </>
    ) : (
      <>
        <span className='file-container'>📄 {explorer.filename}</span>
        <button
          onClick={() => deleteLogic(explorer.filename)}
          className='delete-btn'
        >
          🗑️
        </button>
        <br />
      </>
    ))
  );
};

export default App;
