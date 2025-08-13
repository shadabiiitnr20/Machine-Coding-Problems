export const checkboxData = [
  {
    id: '1',
    label: 'Technology',
    value: 'technology',
    children: [
      {
        id: '1-1',
        label: 'Programming Languages',
        value: 'programming_languages',
        children: [
          { id: '1-1-1', label: 'JavaScript', value: 'javascript' },
          { id: '1-1-2', label: 'Python', value: 'python' },
          {
            id: '1-1-3',
            label: 'Java',
            value: 'java',
            children: [
              {
                id: '1-1-3-1',
                label: 'Spring Framework',
                value: 'spring_framework',
              },
              { id: '1-1-3-2', label: 'Android', value: 'android' },
            ],
          },
        ],
      },
      {
        id: '1-2',
        label: 'Databases',
        value: 'databases',
        children: [
          { id: '1-2-1', label: 'MongoDB', value: 'mongodb' },
          { id: '1-2-2', label: 'PostgreSQL', value: 'postgresql' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Music',
    value: 'music',
  },
];
