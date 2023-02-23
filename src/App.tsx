import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LookupPage from './pages/onboard/LookupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lookup" element={<LookupPage />} />
        {/*<Route path="/request" element={<Lookup />} />*/}
        {/*<Route path="/result" element={<Lookup />} />*/}
        <Route path="/*" element={<Navigate to="/lookup"></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
