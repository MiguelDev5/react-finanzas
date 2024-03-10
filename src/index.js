
import { createRoot } from 'react-dom/client';
import React from 'react';
import TableComponent from './components/table.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TableComponent/>);