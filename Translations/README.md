# Steps to Add Transalations

- Install following packages -> i18next, react-i18next, i18next-browser-languagedetector
- Create, i18n folder inside src folder -> create the language json file and index.js file for i18n configs (Read the docs)
- Export the i18n instance from the index.js file (config file)
- Update main.jsx to load the i18n configuration (wrap the application with i18nextProvider)
- In App.jsx, use the `useTranslation()` hook to load and switch languages.
- To switch the languages use `const {i18n} = useTranslation()`. `i18n.changeLanguage(choosen-language)`
