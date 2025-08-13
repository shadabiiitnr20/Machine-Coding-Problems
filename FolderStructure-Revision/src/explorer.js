export const explorer = {
  name: 'root',
  isFolder: true,
  children: [
    {
      name: 'public',
      isFolder: true,
      children: [
        {
          name: 'index.html',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      children: [
        {
          name: 'app.jsx',
          isFolder: false,
        },
        {
          name: 'index.jsx',
          isFolder: false,
        },
      ],
    },
    {
      name: '.gitignore',
      isFolder: false,
    },
  ],
};
