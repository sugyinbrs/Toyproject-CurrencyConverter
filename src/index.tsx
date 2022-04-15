import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';
import Router from './Router';

const container = document.getElementById('root');

// create a root
const root = createRoot(container!);

// render app to root
root.render(<Router />);
