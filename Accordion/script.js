const data = [
  { id: 1, title: 'Title-1', content: 'Content 1' },
  { id: 2, title: 'Title-2', content: 'Content 2' },
  { id: 3, title: 'Title-3', content: 'Content 3' },
];

const container = document.querySelector('.container');

const renderData = () => {
  data.forEach((item, index) => {
    //
    const mainDiv = document.createElement('div');
    mainDiv.style.border = '1px solid black';
    mainDiv.style.marginBottom = '0.5rem';
    //
    const contentDiv = document.createElement('div');
    contentDiv.textContent = item.content;
    contentDiv.style.padding = '0.5rem';
    contentDiv.style.display = 'none';
    //
    const titleDiv = document.createElement('div');
    titleDiv.textContent = item.title;
    titleDiv.style.padding = '0.5rem';
    titleDiv.style.backgroundColor = 'silver';
    titleDiv.className = 'title-section';
    titleDiv.addEventListener('click', () => {
      contentDiv.style.display =
        contentDiv.style.display === 'none' ? 'block' : 'none';
    });
    //
    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(contentDiv);
    container.appendChild(mainDiv);
  });
};

renderData();
