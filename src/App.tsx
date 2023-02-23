import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import RequestPage from './pages/onboard/RequestPage';
import LookupPage from './pages/onboard/LookupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lookup" element={<LookupPage />} />
        <Route path="/request" element={<RequestPage />} />
        {/*<Route path="/result" element={<resultPage />} />*/}
        <Route path="/*" element={<Navigate to="/lookup"></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
