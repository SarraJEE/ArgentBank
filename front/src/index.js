import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer createRoot depuis "react-dom/client"
import App from './App';
import './index.scss';

const root = createRoot(document.getElementById('root')); // Utiliser createRoot depuis "react-dom/client"
root.render(
    <App />
);
