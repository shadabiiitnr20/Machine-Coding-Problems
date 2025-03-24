import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { explorer } from './Data.js';

createRoot(document.getElementById('root')).render(<App data={explorer} />);
