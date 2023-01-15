import { Home } from 'pages';
import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Router,
} from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Router>
    </BrowserRouter>
  );
};
