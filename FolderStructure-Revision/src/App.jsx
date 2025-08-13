import React, { useState } from 'react';
import './App.css';

const App = ({ data }) => {
  const [explorer, setExplorer] = useState(data);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleAdd = (folderName) => {
    const newFolderName = prompt('Enter Name');
    if (!newFolderName) return;

    const updateExplorer = (node) => {
      if (folderName === node.name && node.isFolder) {
        return {
          ...node,
          children: [
            ...node.children,
            { name: newFolderName, isFolder: true, children: [] },
          ],
        };
      }
      return {
        ...node,
        children: node.children?.map(updateExplorer) || [],
      };
    };

    setExplorer((prevExplorer) => updateExplorer(prevExplorer));
  };

  const handleDelete = (filename) => {
    const updateExplorer = (node) => {
      if (filename === node.name) {
        return null;
      }
      return {
        ...node,
        children: node.children.map(updateExplorer).filter(Boolean) || [],
      };
    };

    setExplorer((prevExplorer) => updateExplorer(prevExplorer));
  };

  return (
    explorer &&
    (explorer.isFolder ? (
      <>
        <span className='folder-name' onClick={handleOpen}>
          <strong>{explorer.name}</strong>
        </span>
        <button className='add-btn' onClick={() => handleAdd(explorer.name)}>
          +
        </button>
        {explorer.name !== 'root' && (
          <button
            className='delete-btn'
            onClick={() => handleDelete(explorer.name)}
          >
            delete
          </button>
        )}
        <br />
        {open && (
          <div className='folder-container'>
            {explorer.children.map((item) => {
              return <App key={item.name} data={item} />;
            })}
          </div>
        )}
      </>
    ) : (
      <>
        <span>{explorer.name}</span>
        <button
          className='delete-btn'
          onClick={() => handleDelete(explorer.name)}
        >
          delete
        </button>
        <br />
      </>
    ))
  );
};

export default App;
