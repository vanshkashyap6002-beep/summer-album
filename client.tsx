import React from 'react';
import { createRoot } from 'react-dom/client';
import { Book } from './components/Book';
import { sampleAlbum } from './lib/album';
import './app/globals.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Book album={sampleAlbum}/></React.StrictMode>);
