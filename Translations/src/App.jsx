import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language dynamically
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>{t('welcome')}</h1>
      <div className='mt-4'>
        <span>{t('language')}: </span>
        <button
          className='btn btn-primary mx-2'
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <button
          className='btn btn-secondary mx-2'
          onClick={() => changeLanguage('es')}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default App;
