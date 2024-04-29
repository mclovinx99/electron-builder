import * as React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Dependencies from './components/dependencies.js';
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import Home from './components/home.js';

const root = createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
		<Routes>
			<Route path="/home" element={<Dependencies />}>
				<Route index element={<Dependencies />} />
			</Route>
			<Route path="/" element={<Home />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	</HashRouter>
);