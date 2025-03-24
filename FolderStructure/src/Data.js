export const explorer = {
  filename: 'root',
  isFolder: true,
  children: [
    {
      filename: 'public',
      isFolder: true,
      children: [
        {
          filename: 'index.html',
          isFolder: true,
          children: [
            {
              filename: 'app.jsx',
              isFolder: false,
            },
            {
              filename: 'main.jsx',
              isFolder: false,
            },
          ],
        },
        {
          filename: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      filename: 'src',
      isFolder: true,
      children: [
        {
          filename: 'app.jsx',
          isFolder: false,
        },
        {
          filename: 'main.jsx',
          isFolder: false,
        },
      ],
    },
    {
      filename: '.gitignore',
      isFolder: false,
    },
  ],
};
