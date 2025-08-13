import React from 'react';

const CheckBoxes = ({ data, checkedData, setCheckedData, parent = null }) => {
  const handleChange = (isChecked, item) => {
    setCheckedData((prev) => {
      const newState = { ...prev, [item.id]: isChecked };

      //update Children
      const updateChildren = (node) => {
        if (node?.children) {
          node?.children.forEach((child) => {
            newState[child?.id] = isChecked;
            if (child?.children) updateChildren(child);
          });
        }
      };
      updateChildren(item);

      //update Parents
      const updateParents = (node) => {
        console.log(node);
        if (!node?.parent) return;
        const siblingsEle = node?.parent?.children || [];
        const isSiblingsChecked = siblingsEle.every(
          (item) => newState[item?.id]
        );
        newState[node?.parent?.id] = isSiblingsChecked;
        updateParents(node?.parent);
      };
      updateParents(item);

      return newState;
    });
  };

  console.log(checkedData);

  return (
    <>
      {data.map((item) => {
        const parentInfo = { ...item, parent };
        return (
          <div key={item.id}>
            <label className='item-label'>
              <input
                type='checkbox'
                name={item.label}
                checked={checkedData[item.id] || false}
                onChange={(e) => handleChange(e.target.checked, parentInfo)}
              />
              {item.label}
            </label>
            {item?.children ? (
              <div className='children-container'>
                <CheckBoxes
                  data={item?.children}
                  checkedData={checkedData}
                  setCheckedData={setCheckedData}
                  parent={parentInfo}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default CheckBoxes;
